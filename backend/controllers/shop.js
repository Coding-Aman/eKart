const stripe = require("stripe")(
  "sk_test_51NXS4YSCD8F4JilTeLPnmOKnjyMVW8pp75Qx2VJbnrQVxQQEuQiMsJ3oftywzwgDdH06CmXdnSW1V3NxhLKLxt8100HaLzSQgI"
);
const path = require("path");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const Product = require("../models/product");
const Order = require("../models/order");

exports.getLatestProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: "desc" });
    res.status(200).json({ products: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.prodId);
    res.status(200).json({ product: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const user = await req.user.populate("cart.productId");
    const cartItems = user.cart;
    res.status(200).json({ cartItems: cartItems });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addToCart = async (req, res, next) => {
  const prodId = req.params.productId;
  // console.log(prodId);
  try {
    const updatedUser = await req.user.addToCart(prodId);
    // console.log(response);
    res.status(200).json({ user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCart = async (req, res, next) => {
  // console.log(req.body);
  try {
    const updatedCart = await req.user.updateCart(
      req.body.productId,
      req.body.quantity
    );

    const user = await updatedCart.populate("cart.productId");
    res.status(200).json({ updatedCart: user.cart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItemFromCart = async (req, res, next) => {
  const prodId = req.params.productId;
  try {
    const response = await req.user.removeFromCart(prodId);
    const user = await response.populate("cart.productId");
    const updatedCart = user.cart;
    res.status(200).json({ updatedCart: updatedCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAddresses = (req, res, next) => {
  const addresses = req.user.address;
  res.render("shop/address", {
    path: "/address",
    pageTitle: "Address",
    addresses: addresses,
  });
};

exports.addAddress = async (req, res, next) => {
  try {
    const response = await req.user.setAddress(req.body);
    res.redirect("/address");
  } catch (err) {
    console.log(err.message);
  }
};

exports.postCheckout = async (req, res, next) => {
  const addressId = req.body.addressId;
  let total = 0;
  try {
    const user = await req.user.populate("cart.productId");
    const products = user.cart;
    products.forEach((p) => (total += p.quantity * p.productId.price));

    const session = await stripe.checkout.sessions.create({
      line_items: products.map((p) => {
        return {
          price_data: {
            currency: "INR",
            product_data: {
              name: p.productId.title,
              description: p.productId.description,
            },
            unit_amount: p.productId.price * 100,
          },
          quantity: p.quantity,
        };
      }),
      mode: "payment",
      success_url:
        "http://localhost:3000/checkout/success?addressId=" + addressId,
      cancel_url: "http://localhost:3000/checkout/cancel",
    });

    res.redirect(303, session.url);
  } catch (err) {
    console.log(err.message);
  }
};

exports.getCheckoutSuccess = async (req, res, next) => {
  const addressId = req.query.addressId;
  const address = req.user.address.find(
    (address) => address._id.toString() === addressId
  );
  try {
    const user = await req.user.populate("cart.productId");
    const products = user.cart.map((p) => {
      return { quantity: p.quantity, product: { ...p.productId } };
    });
    const order = new Order({
      address: address,
      userId: req.user._id.toString(),
      products: products,
    });
    await order.save();
    await req.user.clearCart();
    res.render("shop/checkout-success", {
      path: "/checkout",
      pageTitle: "Order Confirmed",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCheckoutCancel = (req, res, next) => {
  res.render("shop/checkout-cancel", {
    path: "/checkout",
    pageTitle: "Order Cancelled",
  });
};

exports.getOrders = async (req, res, next) => {
  const orders = await Order.find({ userId: req.user.id });
  // console.log(orders);
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Orders",
    orders: orders,
  });
};

exports.getOrderInvoice = async (req, res, next) => {
  const orderId = req.params.orderId;
  const invoiceName = "Invoice-" + orderId + ".pdf";
  const invoicePath = path.join(
    __dirname,
    "..",
    "data",
    "invoices",
    invoiceName
  );

  const pdfDoc = new PDFDocument();
  pdfDoc.pipe(fs.createWriteStream(invoicePath));
  pdfDoc.fontSize(26).text("Invoice", {
    underline: true,
  });
  pdfDoc.text("---------------------");
  const order = await Order.findById(orderId);
  let totalPrice = 0;
  order.products.forEach((prod) => {
    totalPrice += prod.quantity * prod.product.price;
    pdfDoc
      .fontSize(14)
      .text(
        prod.product.title + " - " + prod.quantity + " x " + prod.product.price
      );
  });
  pdfDoc.text("---");
  pdfDoc.fontSize(20).text("Total Price: Rs." + totalPrice);

  pdfDoc.end();

  const file = fs.createReadStream(invoicePath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=" + invoiceName);
  file.pipe(res);
};
