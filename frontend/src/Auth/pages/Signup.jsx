import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import SecondLoginPart from "../components/SecondLoginPart";
import { useRef } from "react";

export default function Signup() {
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();
  const navigate = useNavigate();

  const createAccountHandler = async (event) => {
    event.preventDefault();
    const userInput = {
      name: userName.current.value,
      email: userEmail.current.value,
      password: userPassword.current.value,
    };
    // console.log(userInput);
    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}signup`,
      {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return alert("Unable to Create Your Account");
    }
    navigate("/login");
  };
  return (
    <>
      <div className="logo-header">
        <img src="../logo.png" alt="" />
      </div>
      <div className={styles["main-login"]}>
        <div className={styles["login-part"]}>
          <form onSubmit={createAccountHandler}>
            <h1>Create Your Account</h1>
            <h4>Already have an account</h4>
            <div className={styles["name-div"]}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                ref={userName}
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              ref={userEmail}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={userPassword}
            />
            <p>
              Passwords must be between 8 and 20 characters in length and
              contain 1 upper case letter, 1 lower case letter, and 1 number.
            </p>
            <p>
              Dell Technologies and its group of companies (“Dell”) would like
              to stay in touch and update you on products, services, solutions,
              exclusive offers, and special events. For more details about our
              information practices, see our Privacy Statement. You can
              unsubscribe at any time.
            </p>
            <div className={styles.check_box}>
              <input type="checkbox" name="agree" className={styles.checkbox} />
              <label htmlFor="">
                Yes, I would like Dell to send me email communications.
              </label>
            </div>
            <p>
              By clicking “Create Account”, you agree to our Terms & Conditions.
            </p>
            <button className={styles["btn-signIn"]}>Create Account</button>
            <button className={styles["btn-signIn2"]}>Cancel </button>
          </form>
        </div>
        <SecondLoginPart />
      </div>
    </>
  );
}
