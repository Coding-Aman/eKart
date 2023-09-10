import { useEffect, useState } from "react";
import styles from "./Products.module.css";

import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}admin/get-products`
      );
      //   console.log(response);
      const responseText = await response.json();

      if (!response.ok) {
        return alert(responseText.message);
      }
      //   console.log(responseText.data);
      setProducts(responseText.data);
    };
    getProducts();
  }, []);

  const deleteProductHandler = async (prodId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}admin/delete-product/${prodId}`,
      {
        method: "DELETE",
      }
    );
    // console.log(response);
    const responseText = await response.json();
    if (!response.ok) {
      return alert(responseText.message);
    }
    // console.log(responseText.product);
    setProducts(
      products.filter((p) => {
        return p._id !== responseText.product._id;
      })
    );
  };

  return (
    <>
      <Navigation />
      {products.length === 0 && <h1>No Products Found!!</h1>}
      {products.length > 0 && (
        <main className={styles["grid"]}>
          {products.map((product) => {
            return (
              <ProductCard
                item={product}
                key={product._id}
                onDeleteProduct={deleteProductHandler}
              />
            );
          })}
        </main>
      )}
    </>
  );
}
