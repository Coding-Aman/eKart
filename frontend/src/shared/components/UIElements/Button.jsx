import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={`${props.className || styles.btn}`}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
