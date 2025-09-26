import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Under Development | Vewish Labs",
};

const UnderDevelopmentPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.columnInner}>
                <div className={styles.hero}>
                  <h1 className={styles.heroTitle}>404</h1>
                </div>

                <div className={styles.contentBox}>
                  <h2 className={styles.heading}>Look like you&apos;re lost</h2>
                  <p className={styles.body}>
                    The page you are looking for is not available.
                  </p>

                  <a href="/" className={styles.link}>
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UnderDevelopmentPage;
