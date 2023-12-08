import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const resUserExists = await fetch("http://localhost:5000/register/userCheck", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
    });
        
        const { user } = await resUserExists.json();
        
        if (user) {
            return NextResponse.json({
                message: "User already exists"
            }, { status: 500 });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);

        const res = await fetch("http://localhost:5000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, hashedPassword}),
        });
        
        const userCreated = await res.json();

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Password: ", hashedPassword);

        if (userCreated) {
                return NextResponse.json({
            message: "User has been Registered"
        }, { status: 201 });
            } else {
                return NextResponse.json({
            message: "An Error occured while user was being Registered"
        }, { status: 500 });
            }
        } catch (error) {
            console.log("Error whilst Registration: ", error);
        }
}
