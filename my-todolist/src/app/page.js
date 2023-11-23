import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
