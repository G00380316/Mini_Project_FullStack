import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Password: ", password);

        const res = await fetch("http://localhost:5000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email, password
            }),
        });
        
        await res.json();

        return NextResponse.json({
            message: "User has been Registered"
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
        message: "An Error occured while user was being Registered"
        }, { status: 500 });
    }
}