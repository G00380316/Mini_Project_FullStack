import Navbar from "@/components/navbar/nav";
import React from "react";
import styles from "./calendarbody.module.css";
import CalendarMain from "@/components/calendarMain/calendarMain.js";

export default function page() {
return (
    <div className={styles.cal}>
        <Navbar />
        {/* <div> */}
        <CalendarMain />
        {/* </div> */}
    </div>
);
}
