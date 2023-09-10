import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

export default function Dropdown(props) {
  return (
    <>
      <div className={styles["contaier-apex-dropdown"]}>
        <ul className={`${styles["apex-list"]} ${styles["item-non-bullet"]}`}>
          {props.dropdownLinks.map((dropdownlink) => {
            return (
              <li className={styles["apex-list-item apex-drop-first-parent"]}>
                <Link to="" className={styles["nav-link"]}>
                  {dropdownlink.mainLink}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
