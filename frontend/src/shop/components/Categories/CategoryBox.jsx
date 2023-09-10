import styles from "./CategoryBox.module.css";
import { Link } from "react-router-dom";

export default function CategoryBox(props) {
  return (
    <div className={styles["category-box"]}>
      <div className={styles["cat-item"]}>
        <div>
          <img width="33" height="33" src={props.category.src} alt="laptop" />
        </div>
        <div className={styles["cat-label"]}>{props.category.label}</div>
        <div className={styles["cat-links"]}>
          {props.category.catLinks.map((catLink, index) => {
            return (
              <Link to="" key={index}>
                {catLink}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
