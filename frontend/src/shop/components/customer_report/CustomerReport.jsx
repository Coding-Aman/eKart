import styles from "./CustomerReport.module.css";

export default function CustomerReport() {
  return (
    <section>
      <div className={styles["customer-reprot-section"]}>
        <div className={`${styles["ct-r-box"]} ${styles["ct-r-box-first"]}`}>
          <div className={styles["cust-img-box"]}>
            <img src="./customer_support.jpg" alt="customer-report" />
          </div>
          <div className={styles["v-line"]}></div>
          <div className={styles["cust-txt-box"]}>
            <div className={styles["ct-first-box"]}>
              <h3>
                Customer report Dell APEX drives more efficient and effective IT
                operations with up to:
              </h3>
            </div>
            <div className={styles["ct-second-box"]}>
              <p>
                Explore Business Value of Dell APEX <span>&rarr;</span>
              </p>
            </div>
          </div>
          <div className={styles["cust-pr-box"]}>
            <div className={styles["cust-pr-box-first"]}>
              <h3>60%</h3>
              <p>faster to deploy new capacity</p>
            </div>
            <div className={styles["cust-pr-box-second"]}>
              <h3>39%</h3>
              <p>lower 3-year cost of operations</p>
            </div>
            <div className={styles["cust-pr-box-third"]}>
              <h3>64%</h3>
              <p>reduction of unplanned outages per year</p>
            </div>
          </div>
        </div>
        <div className={`${styles["ct-r-box"]} ${styles["ct-r-box-second"]}`}>
          <div className={styles["v-line"]}></div>
          <div className={styles["cust-txt-box"]}>
            <div className={styles["ct-first-box"]}>
              <h3>See Dell APEX workloads and industry use cases:</h3>
            </div>
            <div className={styles["ct-second-box"]}>
              <p>
                Explore Use Cases <span>&rarr;</span>
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles["ct-r-box"]} ${styles["ct-r-box-third"]}`}>
          <div className={styles["v-line"]}></div>
          <div className={styles["cust-txt-box"]}>
            <div className={styles["ct-first-box"]}>
              <h3>
                Implement and strategize with Dell APEX value-added services
              </h3>
            </div>
            <div className={styles["ct-second-box"]}>
              <p>
                Explore Professional Services for Dell APEX <span>&rarr;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
