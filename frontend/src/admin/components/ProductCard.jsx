import { Link } from "react-router-dom";
import Button from "../../shared/components/UIElements/Button";
import styles from "./ProductCard.module.css";

export default function ProductCard(props) {
  return (
    <article className={styles["product-item"]}>
      <div className={styles["item-heading"]}>
        <h1 className={styles["product-title"]}>{props.item.title}</h1>
      </div>
      <div className={styles["item-image"]}>
        <img
          src={`${import.meta.env.VITE_ASSET_URL}` + props.item.imageUrl}
          alt={props.item.title}
        />
      </div>
      <div className={styles["item-content"]}>
        <h2 className={styles["product-price"]}>{props.item.price}</h2>
        <p className={styles["product-description"]}>
          {props.item.description}
        </p>
      </div>
      <div className={styles["item-actions"]}>
        <Button type="button">
          <Link to={`/admin/addProduct?prodId=${props.item._id}`}>Edit</Link>
        </Button>
        <Button
          type="button"
          onClick={() => {
            props.onDeleteProduct(props.item._id);
          }}
        >
          Delete
        </Button>
      </div>
    </article>
  );
}
