import { NextPage } from "next";

import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Gemstone Genomics</h1>
        <p>coming soon - watch this space</p>
      </main>
    </div>
  );
};

export default Home;
