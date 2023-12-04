import React from 'react'
import styles from "@/components/auth/form.module.css";

export default function loginForm() {
return (
    <div className={styles.container}>
    <form className={styles.form}>
    <h1 className={styles.title}>Please Sign in</h1>
    <input type="email" id="inputEmail" placeholder="Email address"></input>
    <input type="password" id="inputPassword" placeholder="Password"></input>
    <button type="submit">Sign in</button>
    </form>
    </div>
)
}
