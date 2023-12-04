import React from 'react';
import Link from 'next/link';
import styles from '@/components/navbar/nav.module.css';

export default function Nav() {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
            <img src="/logo.jpg"/>
            <Link href='/'><h1>YOURTDLIST</h1></Link>
            <Link href='/login'><p>Login</p></Link>
            <Link href='/task'><p>Tasks</p></Link>
            <Link href='/calender'><p>Calender</p></Link>
            </nav>
        </section>
        
    )
}
