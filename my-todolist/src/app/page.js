import styles from "./page.module.css";
import Navbar from "@/components/navbar/nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.div}>
        <h1>Starting making Tasks today</h1>
      </div>
    </main>
  );
}
