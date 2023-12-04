import React from 'react'
import styles from "@/components/auth/form.module.css";

export default function regForm() {
return (
    <div className={styles.container}>
    <form className={styles.form}>
    <h1 className={styles.title}>Please Sign up</h1>
    <input type="name" id="inputName" placeholder="Full Name"></input>
    <input type="email" id="inputEmail" placeholder="Email address"></input>
    <input type="password" id="inputPassword" placeholder="Password"></input>
    <button type="submit">Sign up</button>
    </form>
    </div>
)
}
