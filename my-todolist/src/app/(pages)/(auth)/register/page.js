import React from "react";
import RegForm from "@/components/auth/signupform";
import styles from "@/app/(pages)/(auth)/register/reg.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <RegForm />
    </div>
  );
}
