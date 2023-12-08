"use client"

import styles from "@/components/auth/form.module.css";
import { useState } from "react";
//import { useRouter } from "next/navigation";

export default function regForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //const router = useRouter();
    console.log(name);
    console.log(email);
    console.log(password);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }
        
        setError("");

        try {
            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                //router.push("/login");
            } else {
                console.log("Error registraiton failed", error);
            }
        } catch (error) {
            console.log("Error whilst Registration: ", error);
        }
    };

return (
<div className={styles.container}>
    <form onSubmit={handleSubmit}className={styles.form}>
        <h1 className={styles.title}>Please Sign up</h1>
        <input
        onChange={(e) => setName(e.target.value)}
        type="name"
        id="inputName"
        placeholder="Full Name"
        ></input>
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
        <div>
        <button type="submit">Sign up</button>
        {error &&(
        <div className={styles.error}>
        {error}
        </div>)}
        </div>
    </form>
</div>
);
}
