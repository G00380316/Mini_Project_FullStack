"use client";

import Navbar from "@/components/navbar/nav";
import TodoWrapper from "@/components/Task/TodoWrapper";


export default function page() {

    return (
    <>
        <div>
         <Navbar />
            <div>
                <TodoWrapper/>
            </div>    
         </div>
    </>
    );
}
