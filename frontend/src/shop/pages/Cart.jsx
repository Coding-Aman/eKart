import styles from "./Cart.module.css";
import MainHeader from "../components/Header/MainHeader";
import Button from "../../shared/components/UIElements/Button";
import MainFooter from "../components/Footer/MainFooter";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth-context";

export default function Cart() {
  const [totalAmount, setTotalAmount] = useState();
  const [cartItems, setcartItems] = useState([]);
  const ctx = useContext(AuthContext);

  console.log(ctx);

  const totalAmountHandler = (cart) => {
    let total = 0;
    for (let item of cart) {
      total += item.productId.price * item.quantity;
    }
    // console.log(total);
    setTotalAmount(total);
  };

  useEffect(() => {
    const getCartProduct = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}cart`,
        {
          headers: {
            authorization: "Bearer " + ctx.token,
          },
        }
      );
      const responseText = await response.json();
      // console.log(responseText.cartItems);
      if (!response.ok) {
        return false;
      }
      setcartItems(responseText.cartItems);
      totalAmountHandler(responseText.cartItems);
    };
    getCartProduct();
  }, []);

  const productSummary = [
    {
      title: "items",
      value: `Rs.${totalAmount}`,
    },
    {
      title: "Delivery",
      value: "free",
    },
    {
      title: "Total",
      value: `Rs.${totalAmount}`,
    },
    {
      title: "Above price include tax",
    },
  ];

  const deleteCartItemHandler = async (prodId) => {
    // console.log(prodId);
    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}cart/${prodId}`,
      {
        method: "DELETE",
        authorization: "Bearer " + ctx.token,
      }
    );
    if (!response.ok) {
      return false;
    }
    const responseText = await response.json();
    setcartItems(responseText.updatedCart);
    totalAmountHandler(responseText.updatedCart);
  };

  const updateCartItemHandler = async (qty, prodId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}updateCart`,
      {
        method: "PATCH",
        body: JSON.stringify({
          productId: prodId,
          quantity: qty,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + ctx.token,
        },
      }
    );
    if (!response.ok) {
      return false;
    }
    const responseText = await response.json();
    // console.log(responseText.updatedCart);
    setcartItems(responseText.updatedCart);
    totalAmountHandler(responseText.updatedCart);
  };

  return (
    <>
      <MainHeader />
      {cartItems.length == 0 && (
        <div className={styles["container"]}>
          <p>
            <img
              src="https://img.icons8.com/ios/50/636363/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
            <br />
            No items in cart
          </p>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className={styles["container"]}>
          <div className={styles["cart-container"]}>
            <div className={styles["cart-product-container"]}>
              <h1>Cart</h1>
              <div className={styles["product-container"]}>
                <div className={styles["heading"]}>
                  <div className={styles["item"]}>Item</div>
                  <div className={styles["quantity"]}>Quantity</div>
                  <div className={styles["price"]}>Price</div>
                </div>
                {cartItems.map((cartProduct) => {
                  return (
                    <div className={styles["content"]} key={cartProduct._id}>
                      <div className={styles["item"]}>
                        <div className={styles["item-image"]}>
                          <img
                            src={
                              import.meta.env.VITE_ASSET_URL +
                              cartProduct.productId.imageUrl
                            }
                            alt="INSPIRON"
                          />
                        </div>
                        <div className={styles["item-title"]}>
                          {cartProduct.productId.title}
                        </div>
                      </div>
                      <div className={styles["quantity"]}>
                        <div className={styles["change-qty-option"]}>
                          {cartProduct.quantity == 1 && (
                            <Button
                              onClick={() => {
                                deleteCartItemHandler(
                                  cartProduct.productId._id
                                );
                              }}
                            >
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <path
                                    d="M10 11V17"
                                    stroke="#3276c3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                  <path
                                    d="M14 11V17"
                                    stroke="#3276c3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                  <path
                                    d="M4 7H20"
                                    stroke="#3276c3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                  <path
                                    d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                    stroke="#3276c3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                  <path
                                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                    stroke="#3276c3"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </g>
                              </svg>
                            </Button>
                          )}
                          {cartProduct.quantity > 1 && (
                            <Button
                              onClick={() => {
                                updateCartItemHandler(
                                  -1,
                                  cartProduct.productId._id
                                );
                              }}
                            >
                              -
                            </Button>
                          )}
                          <Button>{cartProduct.quantity}</Button>
                          <Button
                            onClick={() => {
                              updateCartItemHandler(
                                1,
                                cartProduct.productId._id
                              );
                            }}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className={styles["price"]}>
                        <br />
                        Rs. {cartProduct.productId.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles["cart-checkout-details"]}>
            <div className={styles["product-summary"]}>
              {productSummary.map((productsum) => {
                return (
                  <div className={styles["summary"]} key={productsum.title}>
                    <div className={styles["item"]}>{productsum.title}</div>
                    <div className={styles["price"]}>{productsum.value}</div>
                  </div>
                );
              })}
            </div>
            <Button className={styles["Checkout"]}>Checkout</Button>
          </div>
        </div>
      )}

      <MainFooter />
    </>
  );
}
