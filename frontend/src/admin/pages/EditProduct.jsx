import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import styles from "./EditProduct.module.css";
import Button from "../../shared/components/UIElements/Button";
import ImageUpload from "../../shared/components/ImageUpload/ImageUpload";

export default function EditProduct() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productId, setProductId] = useState("");

  const navigate = useNavigate();

  //Fetching Query Parameters
  const queryString = useLocation().search;

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BACKEND_URL}get-product/${prodId}`
      );
      const responseText = await response.json();
      // console.log(responseText.product);
      setTitle(responseText.product.title);
      setImageUrl(responseText.product.imageUrl);
      setPrice(responseText.product.price);
      setDescription(responseText.product.description);
      setProductId(responseText.product._id);
    };
    let prodId;

    if (queryString) {
      const queryParams = new URLSearchParams(queryString);
      prodId = queryParams.get("prodId");
      getProduct();
    } else {
      setTitle("");
      setImageUrl("");
      setPrice("");
      setDescription("");
    }
  }, [queryString]);

  const inputChangeHandler = (input, value) => {
    if (input === "title") {
      setTitle(value);
    } else if (input === "imageUrl") {
      setImageUrl(value);
    } else if (input === "price") {
      setPrice(value);
    } else {
      setDescription(value);
    }
  };

  const productSubmitHandler = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("imageUrl", imageUrl);
    formdata.append("price", +price);
    formdata.append("description", description);

    // for (let p of formdata) {
    //   console.log(p);
    // }

    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}admin/${
        !queryString ? "add-product" : `update-product/${productId}`
      }`,
      {
        method: !queryString ? "POST" : "PUT",
        body: formdata,
      }
    );

    // console.log(response);
    const responseText = await response.json();
    setTitle("");
    setImageUrl("");
    setPrice("");
    setDescription("");

    if (!response.ok) {
      alert(responseText.message);
    } else {
      navigate("/admin/products");
    }
  };

  return (
    <>
      <Navigation />
      <form
        onSubmit={productSubmitHandler}
        className={styles["product-form"]}
        encType="multipart/form-data"
      >
        <div className={styles["form-control"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className={styles["form-control"]}>
          <ImageUpload onGetImage={inputChangeHandler} image={imageUrl} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => {
              inputChangeHandler("price", event.target.value);
            }}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            style={{ resize: "none" }}
            value={description}
            onChange={(event) => {
              inputChangeHandler("description", event.target.value);
            }}
          ></textarea>
        </div>
        <Button type="submit">
          {!queryString ? "Add Product" : "Update Product"}
        </Button>
      </form>
    </>
  );
}
