import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import SecondLoginPart from "../components/SecondLoginPart";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";

export default function Login() {
  const userEmail = useRef();
  const userPassword = useRef();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const loginHandler = async (event) => {
    event.preventDefault();
    const userInput = {
      email: userEmail.current.value,
      password: userPassword.current.value,
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_BACKEND_URL}login`,
      {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      return alert("Invalid Email or Password");
    }
    const responseText = await response.json();
    // console.log(responseText.token);
    ctx.loginHandler(responseText.token);
    navigate("/");
  };
  return (
    <>
      <div className="logo-header">
        <img src="../logo.png" alt="" />
      </div>
      <div className={styles["main-login"]}>
        <div className={styles["login-part"]}>
          <form onSubmit={loginHandler}>
            <h1>SIGN IN</h1>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              ref={userEmail}
            />
            <br />
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              ref={userPassword}
            />
            <p>
              Don't remember your password?<Link>Create or Reset Password</Link>
            </p>
            <button className={styles["btn-signIn"]}>Sign In</button>
            <p>or</p>
            <button className={styles["btn-signIn2"]}>
              Send One-Time Password
            </button>
            <p>
              Don't have a Dell account? <Link>Create an account</Link>
            </p>
          </form>
        </div>
        <SecondLoginPart />
      </div>
    </>
  );
}
