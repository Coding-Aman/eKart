import { Link } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import SecondLoginPart from "../components/SecondLoginPart";

export default function ResetPassword() {
  return (
    <>
      <div className="logo-header">
        <img src="../logo.png" alt="" />
      </div>
      <div className={styles["main-login"]}>
        <div className={styles["login-part"]}>
          <form>
            <h1>Account Verification</h1>
            <h4>
              Enter the email address associated with your Dell account to
              receive one-time password
            </h4>
            <input type="text" name="email" placeholder="Email Address" />
            <br />

            <button className={styles["btn-signIn"]}>Sign In</button>
            <p>
              Remeber Your Password?{" "}
              <Link>
                {" "}
                <u>Sign In</u>
              </Link>
            </p>
          </form>
        </div>
        <SecondLoginPart />
      </div>
    </>
  );
}
