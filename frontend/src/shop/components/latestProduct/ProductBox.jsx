import { Link } from "react-router-dom";
import styles from "./ProductBox.module.css";

export default function ProductBox(props) {
  return (
    <Link to={`/product/${props.product._id}`}>
      <div className={styles["product-box"]}>
        <div className={styles["product-icon"]}>
          <svg
            className={styles["product-icon-size"]}
            viewBox="0 -1 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>heart-like</title> <desc>Created with Sketch Beta.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketch:type="MSPage"
              >
                {" "}
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-102.000000, -882.000000)"
                  fill="#e60a0a"
                >
                  {" "}
                  <path
                    d="M126,882 C122.667,882 119.982,883.842 117.969,886.235 C116.013,883.76 113.333,882 110,882 C105.306,882 102,886.036 102,890.438 C102,892.799 102.967,894.499 104.026,896.097 L116.459,911.003 C117.854,912.312 118.118,912.312 119.513,911.003 L131.974,896.097 C133.22,894.499 134,892.799 134,890.438 C134,886.036 130.694,882 126,882"
                    id="heart-like"
                    sketch:type="MSShapeGroup"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>

          <svg
            className={styles["product-icon-size"]}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.5"
                d="M3.03998 2.29242C2.64921 2.15503 2.22106 2.36044 2.08368 2.7512C1.94629 3.14197 2.1517 3.57012 2.54246 3.7075L2.80367 3.79934C3.47128 4.03406 3.91003 4.18961 4.23288 4.34802C4.5361 4.4968 4.66977 4.61723 4.75783 4.74609C4.84809 4.87818 4.91779 5.0596 4.95712 5.42295C4.99828 5.80316 4.9993 6.29837 4.9993 7.03832L4.9993 9.64C4.9993 12.5816 5.06254 13.5523 5.92894 14.4662C6.79534 15.38 8.18979 15.38 10.9787 15.38H16.2816C17.8426 15.38 18.6231 15.38 19.1748 14.9304C19.7266 14.4808 19.8841 13.7164 20.1992 12.1875L20.699 9.76275C21.0461 8.02369 21.2197 7.15417 20.7757 6.57708C20.3318 6 18.815 6 17.1301 6H6.49184C6.48515 5.72967 6.47247 5.48373 6.44841 5.26153C6.39468 4.76515 6.27827 4.31243 5.99629 3.89979C5.71211 3.48393 5.33426 3.21759 4.89363 3.00139C4.48154 2.79919 3.95791 2.61511 3.34138 2.39838L3.03998 2.29242Z"
                fill="#2853e2"
              />{" "}
              <path
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                fill="#2853e2"
              />{" "}
              <path
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                fill="#2853e2"
              />{" "}
              <path
                d="M9.37387 8.26066C9.78227 8.19147 10.1694 8.46645 10.2386 8.87485L10.7668 11.9927C10.836 12.4011 10.561 12.7883 10.1526 12.8574C9.74421 12.9266 9.35705 12.6516 9.28787 12.2432L8.75968 9.12539C8.69049 8.717 8.96548 8.32984 9.37387 8.26066Z"
                fill="#2853e2"
              />{" "}
              <path
                d="M14.788 8.87485C14.8572 8.46645 15.2443 8.19147 15.6527 8.26066C16.0611 8.32984 16.3361 8.717 16.2669 9.12539L15.7387 12.2432C15.6696 12.6516 15.2824 12.9266 14.874 12.8574C14.4656 12.7883 14.1906 12.4011 14.2598 11.9927L14.788 8.87485Z"
                fill="#2853e2"
              />{" "}
            </g>
          </svg>
        </div>
        <div className={styles["product-img"]}>
          <img
            src={import.meta.env.VITE_ASSET_URL + props.product.imageUrl}
            alt="INSPIRON"
          />
        </div>
        <div className={styles["product-name"]}>{props.product.title}</div>
        <div className={styles["product-dis"]}>{props.product.description}</div>
        <div className={styles["product-price"]}>
          STARTING AT &#8377; {props.product.price}
        </div>
      </div>
    </Link>
  );
}
