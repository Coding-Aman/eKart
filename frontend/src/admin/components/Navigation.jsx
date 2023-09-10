import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Button from "../../shared/components/UIElements/Button";

export default function Navigation() {
  return (
    <nav className={styles["admin-nav"]}>
      <ul>
        <li className={styles["nav-item"]}>
          <Link to="/">Shop</Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/admin/addProduct">Add Product</Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/admin/products">Admin Products</Link>
        </li>
      </ul>
      <ul>
        <li className={styles["nav-item"]}>
          <Button type="button">LogOut</Button>
        </li>
      </ul>
    </nav>
  );
}
