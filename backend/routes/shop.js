const express = require("express");

const {
  getLatestProducts,
  getSingleProduct,
  getCart,
  addToCart,
  updateCart,
  deleteItemFromCart,
  getAddresses,
  addAddress,
  getCheckoutCancel,
  getCheckoutSuccess,
  postCheckout,
  getOrders,
  getOrderInvoice,
} = require("../controllers/shop");
const isAuth = require("../middlewares/is-Auth");

const router = express.Router();

router.get("/latest-products", getLatestProducts);

router.get("/get-product/:prodId", getSingleProduct);

router.get("/cart", isAuth, getCart);

router.patch("/cart/:productId", isAuth, addToCart);

router.patch("/updateCart", isAuth, updateCart);

router.delete("/cart/:productId", isAuth, deleteItemFromCart);

// router.get("/address", isAuth, getAddresses);

// router.post("/addAddress", isAuth, addAddress);

// router.post("/checkout", isAuth, postCheckout);

// router.get("/checkout/success", isAuth, getCheckoutSuccess);

// router.get("/checkout/cancel", isAuth, getCheckoutCancel);

// router.get("/orders", isAuth, getOrders);

// router.get("/orders/:orderId", isAuth, getOrderInvoice);

module.exports = router;
