import styles from "../components/SecondLoginPart.module.css";

export default function SecondLoginPart() {
  return (
    <div className={styles["second-login-part"]}>
      <h1>Dell Accounts Benifits</h1>
      <p>
        My Account is an easy, more centralized way to manage your tech. Sign Up
        Now!
      </p>
      <div className={styles["login-box"]}>
        <div className={styles["login-box1"]}>
          <img src="../login-magnifying.png" alt="" />
          <p>
            <b>Order Tracking</b>
          </p>
          <p>Manage orders, track shipping status and view support history</p>
        </div>
        <div className={styles["login-box1"]}>
          <img src="../login-message.png" alt="" />
          <p>
            <b>Order Tracking</b>
          </p>
          <p>Manage orders, track shipping status and view support history</p>
        </div>
        <div className={styles["login-box1"]}>
          <img src="../login-profile.png" alt="" />
          <p>
            <b>Order Tracking</b>
          </p>
          <p>Manage orders, track shipping status and view support history</p>
        </div>
      </div>
      <img
        src="https://i.dell.com/sites/csimages/Banner_Imagery/all/xps-9530-my-account-460x460.png"
        alt=""
      />
    </div>
  );
}
