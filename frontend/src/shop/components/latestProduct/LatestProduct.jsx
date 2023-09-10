import { useState } from "react";
import styles from "./LatestProduct.module.css";
import ProductBox from "./ProductBox";
import { useEffect } from "react";

export default function LatestProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getLatestProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}latest-products`
      );
      // console.log(response);
      const responseText = await response.json();
      if (!response.ok) {
        return false;
      }
      console.log(responseText.products);
      setProducts(responseText.products);
    };
    getLatestProducts();
  }, []);
  return (
    <section>
      <div className={styles["latest-products-container"]}>
        <div className={styles["product-title"]}>Latest Products</div>
        <div className={styles["product-container-parent"]}>
          <div className={styles["product-container"]}>
            {products.map((product) => {
              return <ProductBox product={product} key={product._id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
