"use client"

import React from 'react'
import styles from "@/components/auth/form.module.css";
import Link from 'next/link';
import { useState } from "react";
//import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function loginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            /*const res = await signIn("credentials", {
                email, password, redirect: false
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }*/

            router.replace("/");
        }
        catch (error) {
            console.log(error);
        }
    };
return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Please Sign in</h1>
            <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="inputEmail"
            placeholder="Email address"
            ></input>
            <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="inputPassword"
            placeholder="Password"
            ></input>
            <button type="submit">Sign in</button>
        </form>
        <div className={styles.link}>
            <Link href="/register">
            <p className={styles.p}>Haven't registered yet click here!!!</p>
            </Link>
        </div>
    </div>
);
}
