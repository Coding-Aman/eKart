import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";

export default function NavItem(props) {
  return (
    <li className={`${styles["nav-item"]} ${styles["apex-parent"]}`}>
      <Link to="" className="link">
        {props.item.navLink}
        {props.item.dropdownLinks?.length > 0 && (
          <div>
            <img
              width="12"
              height="12"
              src="https://img.icons8.com/ios-filled/50/636363/expand-arrow--v1.png"
              alt="expand-arrow--v1"
              className={styles["top-arrow"]}
            />
          </div>
        )}
      </Link>
      {props.item.dropdownLinks?.length > 0 && (
        <div className={styles["contaier-apex-dropdown"]}>
          <ul className={`${styles["apex-list"]} item-non-bullet`}>
            {props.item.dropdownLinks.map((ddLink) => {
              return (
                <li
                  key={ddLink.mainLink}
                  className={`${styles["apex-list-item"]} ${styles["apex-drop-first-parent"]}`}
                >
                  <Link to="" className={styles["nav-link"]}>
                    {ddLink.mainLink}
                    {ddLink.subLinks && (
                      <div className={styles["nav-link-icon"]}>
                        <img
                          width="19"
                          height="19"
                          src="https://img.icons8.com/ios-glyphs/30/000000/forward.png"
                          alt="forward"
                        />
                      </div>
                    )}
                    {ddLink.subLinks && (
                      <div
                        className={`${styles["container-apex-dropdown-child"]} ${styles["apex-dropdown-first-child"]}`}
                      >
                        <ul className="item-non-bullet">
                          {ddLink.subLinks.map((ddSubLink) => {
                            return (
                              <li key={ddSubLink}>
                                <Link to="" className={styles["nav-link"]}>
                                  {ddSubLink}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}
