import styles from "./page.module.css";
import LoginForm from "@/components/auth/loginForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
