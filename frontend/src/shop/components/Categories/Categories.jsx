import styles from "./Categories.module.css";

import CategoryBox from "./CategoryBox";

const CATEGORY_LIST = [
  {
    src: "./laptop.png",
    label: "Laptops",
    catLinks: ["For Home", "For Business"],
  },
  {
    src: "./desktop.png",
    label: "Desktop",
    catLinks: ["For Home", "For Business"],
  },
];
export default function Categories() {
  return (
    <div className={styles["category-container"]}>
      {CATEGORY_LIST.map((category) => {
        return <CategoryBox category={category} key={category.label} />;
      })}
    </div>
  );
}
