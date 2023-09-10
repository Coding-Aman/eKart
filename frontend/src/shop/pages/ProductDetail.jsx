import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";

import styles from "./ProductDetail.module.css";
import Button from "../../shared/components/UIElements/Button";
import AuthContext from "../../context/auth-context";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productID } = useParams();
  // console.log(productID);
  const ctx = useContext(AuthContext);

  const ProductDetail = [
    {
      name: "Description",
      value: `${product.description}`,
    },

    {
      name: "Price",
      value: `${product.price}`,
    },
  ];

  const Navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}get-product/${productID}`
      );
      const responseText = await response.json();
      // console.log(responseText.product);
      if (!response.ok) {
        return false;
      }
      setProduct(responseText.product);
    };
    getProduct();
  }, []);

  const addToCartHandler = async (prodId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}cart/${prodId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + ctx.token,
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      return false;
    }
    Navigate("/cart");
  };
  return (
    <>
      <MainHeader />
      <div className={styles["blank"]}></div>
      <div className={styles["header-container"]}>
        <div className={styles["left-side-option"]}>
          <span>Customization </span>
          <span>Tech Specs</span>
          <span>Product Details</span>
          <span>Ratings & Reviews</span>
          <span>Drivers, Manuals & Support</span>
        </div>

        <div className={styles["right-side-option"]}>
          <span> Rs.{product.price}</span>
          <Button className={styles["Add-to-cart"]}>Add to Cart</Button>
        </div>
      </div>

      <section className={styles["Product-details"]}>
        <div className={styles["product-details-image-section"]}>
          <div className={styles["image-detail"]}>{product.title}</div>
          <div className={styles["image-preview"]}>
            <img
              src={import.meta.env.VITE_ASSET_URL + product.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className={styles["product-details-description-section"]}>
          <h3>{product.title}</h3>

          <div className={styles["product-description"]}>
            {ProductDetail.map((proDet) => {
              return (
                <div className={styles["description-box"]}>
                  <div className={styles["description-box-title"]}>
                    {proDet.name}
                  </div>
                  <div className={styles["description-box-content"]}>
                    {proDet.value}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles["product-checkout"]}>
            <Button
              className={styles["Add-to-cart"]}
              onClick={() => {
                addToCartHandler(product._id);
              }}
            >
              Add to Cart
            </Button>
            <Button className={styles["buy-Now"]}>Buy Now</Button>
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
}
