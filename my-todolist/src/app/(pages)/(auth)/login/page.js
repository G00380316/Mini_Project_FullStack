import React from "react";
import Navbar from "@/components/navbar/nav";
import LoginForm from "@/components/auth/loginForm";
import styles from "@/app/(pages)/(auth)/login/login.module.css"

export default function page() {
    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
    );
}
