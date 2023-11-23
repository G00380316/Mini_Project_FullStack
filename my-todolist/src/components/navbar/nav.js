import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href='/'><h1>YOURTDLIST</h1></Link>
            <Link href='/login'><p>Login</p></Link>
            <Link href='/task'><p>Tasks</p></Link>
            <Link href='/calender'><p>Calender</p></Link>
        </nav>
    )
}
