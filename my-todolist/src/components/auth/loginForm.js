"use client"

import React from 'react'
import styles from "@/components/auth/form.module.css";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from 'next/server';


export default function loginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("All fields are necessary");
            return;
        }

        try {
            const res = await fetch('api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                }),
            });
            
            const user = await res.json();
            
            if (user.userToken) {
                const form = e.target;
                form.reset();
                router.push("/task");
                return NextResponse.json({ user }, { status: 201 });
            } else {
                setError("User doesn't exist, try again");
                console.log("Error registraiton failed, ", error);
                return NextResponse.json({ error }, { status: 500 });
            }
        } catch (error) {
            console.log("Error whilst Signing in: ", error);
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
