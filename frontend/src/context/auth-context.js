import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export default AuthContext;
