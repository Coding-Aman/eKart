import FooterOffering from "./FooterOffering";
import styles from "./MainFooter.module.css";
import { Link } from "react-router-dom";

const offerings = [
  {
    page_links: [
      {
        title: "Home",
      },
      {
        title: "About",
      },
      {
        title: "Contact US",
      },
    ],
  },
  {
    page_links: [
      {
        title: "Terms & Conditions",
      },
      {
        title: "Returns Policy",
      },
      {
        title: "Privacy Policy",
      },
      {
        title: "Track Your Order",
      },
      {
        title: "Return & Exchange",
      },
    ],
  },
];
const social_images = [
  {
    src: "./fb.jpg",
  },
  {
    src: "./insta.jpg",
  },
  {
    src: "./linkedin.jpg",
  },
  {
    src: "./youtube.jpg",
  },
];
export default function MainFooter() {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        {offerings.map((offering, index) => {
          return <FooterOffering items={offering} key={index} />;
        })}

        <div className={`${styles["ft-box-third"]} ${styles["ft-box"]}`}>
          <ul className="item-non-bullet">
            <li>
              Support/Whatsapp:
              <Link to="tel:+987654321" className="link">
                +91 9876543241
              </Link>
            </li>
            <li>
              <Link to="mailto:+info@dell.com" className="link">
                info@dell.com
              </Link>
            </li>
            <li>
              {social_images.map((img, index) => {
                return (
                  <Link to="" key={index}>
                    <img src={img.src} alt="" width="20px" />
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>

        <div className={`${styles["ft-box-fourth"]} ${styles["ft-box"]}`}>
          <h4>Sign Up Newsletter</h4>
          <p>Get updates by subscribe our weekly newsletter</p>
          <div className={styles["ft-subscribe"]}>
            <input type="email" placeholder="Enter your email" />
            <Link to="" className="link">
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <p>&copy; Dell Techology | Designed by NEERAJ KUMAR</p>
      </div>
    </footer>
  );
}
