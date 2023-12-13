import React from "react";
import styles from "@/app/(pages)/task/task.module.css";
import Taskpage from "@/components/task/Taskpage";

export default function page() {
    return (
        <main className={styles.main}>
            <div className={styles.div}>
                    <h1>Starting making Tasks...</h1>
                    <div style={{paddingTop: 50}}>
                        <Taskpage/>
                    </div>
            </div>
        </main>
    );
}
