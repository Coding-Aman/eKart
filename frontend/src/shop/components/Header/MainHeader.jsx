import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

import MainNavigation from "./MainNavigation";
import { useContext } from "react";
import AuthContext from "../../../context/auth-context";

export default function MainHeader() {
  const ctx = useContext(AuthContext);
  return (
    <header>
      <div className={styles["top-header"]}>
        <div className={styles["top-header-left-menu"]}>
          <Link to="/">
            <img
              src="../logo.png"
              alt="Dell Logo"
              width="240px"
              height="38px"
            />
          </Link>
          <div className={styles["top-search-bar"]}>
            <input type="search" name="" id="" placeholder="Search Dell" />
            <img
              width="23"
              height="23"
              src="https://img.icons8.com/ios/50/636363/search--v1.png"
              alt="search--v1"
            />
          </div>
        </div>
        <div className={styles["top-header-right-menu"]}>
          <div className={styles["right-menu-item"]}>
            <div
              className={`${styles["top-header-item"]} ${styles["sign-in-item"]}`}
            >
              <Link to="" className="link">
                <div>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/puffy/32/636363/experimental-user-puffy.png"
                    alt="experimental-user-puffy"
                  />
                </div>
                Sign In
                <div>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/636363/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                    className={styles["top-arrow"]}
                  />
                </div>
              </Link>
              <div className={styles["sign-in-dropdown"]}>
                <h3>Welcome to Dell</h3>
                <p>My Account</p>
                <ul>
                  <li>Place orders quickly and easily</li>
                  <li>View orders and track your shipping status</li>
                  <li>Create and access a list of your products</li>
                </ul>
                <div className={styles["sign-in-dropdown-buttons"]}>
                  {!ctx.isLoggedIn ? (
                    <Link
                      to="/login"
                      className={`${styles["dropdown-btn"]} ${styles["signin-btn"]}`}
                    >
                      Sign in
                    </Link>
                  ) : (
                    <div
                      to="/login"
                      className={`${styles["dropdown-btn"]} ${styles["signin-btn"]}`}
                      onClick={ctx.logoutHandler()}
                    >
                      Log Out
                    </div>
                  )}
                  <Link to="/signup" className={styles["dropdown-btn"]}>
                    Create an Account
                  </Link>
                  <Link to="" className={styles["dropdown-btn"]}>
                    Premier Sign in
                  </Link>
                  <Link to="" className={styles["dropdown-btn"]}>
                    Partner Program Sign in
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["top-header-item"]}>
              <Link to="" className="link">
                <div>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/glyph-neue/64/636363/headset--v2.png"
                    alt="headset--v2"
                  />
                </div>
                Contact Us
              </Link>
            </div>
            <div className={styles["top-header-item"]}>
              <Link to="" className="link">
                <div>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/windows/32/636363/geography--v1.png"
                    alt="geography--v1"
                  />
                </div>
                IN/EN
                <div>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/636363/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                    className={styles["top-arrow"]}
                  />
                </div>
              </Link>
            </div>
            <div className={styles["top-header-item"]}>
              <Link to="/cart" className="link">
                <div>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/ios/50/636363/shopping-cart--v1.png"
                    alt="shopping-cart--v1"
                  />
                </div>
                Cart
                <div>
                  <img
                    width="12"
                    height="12"
                    src="https://img.icons8.com/ios-filled/50/636363/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                    className={styles["top-arrow"]}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MainNavigation />
    </header>
  );
}
