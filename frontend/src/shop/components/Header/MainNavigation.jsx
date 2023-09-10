import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";
import NavItem from "./NavItem";

// const navLinks = [
//   "Apex",
//   "Products",
//   "Solutions",
//   "Services",
//   "Support",
//   "Deals",
// ];

const NAV_ITEMS = [
  {
    navLink: "APEX",
    dropdownLinks: [
      {
        mainLink: "View All APEX",
        subLinks: null,
      },
      {
        mainLink: "Compute & HCL",
        subLinks: ["Apex Private Cloud", "Apex Computer"],
      },
      {
        mainLink: "Storage",
        subLinks: [
          "Apex Storage For Private Cloud",
          "Apex Storage For Public Cloud",
        ],
      },
    ],
  },
  {
    navLink: "Products",
    dropdownLinks: [
      {
        mainLink: "Laptops",
        subLinks: ["For Home", "For Business"],
      },
      {
        mainLink: "Desktops & All-in-one",
        subLinks: ["For Home", "For Business"],
      },
      {
        mainLink: "Gaming",
        subLinks: ["Dell Gaming", "Allienware laptops"],
      },
      {
        mainLink: "Workstation",
        subLinks: null,
      },
    ],
  },
  {
    navLink: "Solutions",
    dropdownLinks: [],
  },
  {
    navLink: "Services",
    dropdownLinks: [],
  },
  {
    navLink: "Support",
    dropdownLinks: [],
  },
  {
    navLink: "Deals",
    dropdownLinks: [],
  },
  {
    navLink: "Find a Store",
  },
];

export default function MainNavigation() {
  return (
    <div className={styles["bottom-header"]}>
      <nav className={styles["navigation"]}>
        <ul className={`item-non-bullet ${styles["bottom-nav"]}`}>
          {NAV_ITEMS.map((navItem) => {
            return <NavItem item={navItem} key={navItem.navLink} />;
          })}

          {/* <li className={`${styles["nav-item"]} ${styles["product-parent"]}`}>
            <Link to="" className="link">
              Products
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
            <div className={styles["contaier-product-dropdown"]}>
              <ul className="item-non-bullet">
                <li className={styles["product-drop-first-parent"]}>
                  <Link to="" className={styles["nav-link"]}>
                    Laptops
                    <div className={styles["nav-link-icon"]}>
                      <img
                        width="19"
                        height="19"
                        src="https://img.icons8.com/ios-glyphs/30/000000/forward.png"
                        alt="forward"
                      />
                    </div>
                  </Link>

                  <div className="container-product-dropdown-child product-dropdown-first-child">
                    <ul className="item-non-bullet">
                      <li>
                        <Link to="" className={styles["nav-link"]}>
                          For Home
                        </Link>
                      </li>
                      <li>
                        <Link to="" className={styles["nav-link"]}>
                          For Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles["product-drop-second-parent"]}>
                  <Link to="" className={styles["nav-link"]}>
                    Desktops & All-in-Ones
                    <div className={styles["nav-link-icon"]}>
                      <img
                        width="19"
                        height="19"
                        src="https://img.icons8.com/ios-glyphs/30/000000/forward.png"
                        alt="forward"
                      />
                    </div>
                  </Link>
                  <div
                    className={
                      styles[
                        "container-product-dropdown-child product-dropdown-second-child"
                      ]
                    }
                  >
                    <ul className="item-non-bullet">
                      <li>
                        <Link to="" className={styles["nav-link"]}>
                          For Home
                        </Link>
                      </li>
                      <li>
                        <Link to="" className={styles["nav-link"]}>
                          For Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Gaming
                    <div className={styles["nav-link-icon"]}>
                      <img
                        width="19"
                        height="19"
                        src="https://img.icons8.com/ios-glyphs/30/000000/forward.png"
                        alt="forward"
                      />
                    </div>
                  </Link>
                  <div
                    className={
                      styles[
                        "container-product-dropdown-child product-dropdown-first-child"
                      ]
                    }
                  >
                    <ul className="item-non-bullet">
                      <li>
                        <Link to="" className={styles["nav-link"]}>
                          For Home
                        </Link>
                      </li>
                      <li>
                        <Link to="" className={styles["nav-link"]}>
                          For Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Workstations
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Thin Clients
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Servers
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Data Storage
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Data Protection
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Networking
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Hyperconverged Infrastructure
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Monitors
                    <div className={styles["nav-link-icon"]}>
                      <img
                        width="19"
                        height="19"
                        src="https://img.icons8.com/ios-glyphs/30/000000/forward.png"
                        alt="forward"
                      />
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link to="" className={styles["nav-link"]}>
                    Electronics & Accessories
                    <div className={styles["nav-link-icon"]}>
                      <img
                        width="19"
                        height="19"
                        src="https://img.icons8.com/ios-glyphs/30/000000/forward.png"
                        alt="forward"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["nav-item"]}>
            <Link to="" className="link">
              Solutions
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
          </li>
          <li className={styles["nav-item"]}>
            <Link to="" className="link">
              Services
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
          </li>
          <li className={styles["nav-item"]}>
            <Link to="" className="link">
              Support
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
          </li>
          <li className={styles["nav-item"]}>
            <Link to="" className="link">
              Deals
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
          </li>
          <li className={styles["nav-item"]}>
            <Link to="" className="link">
              Find a Store{" "}
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
