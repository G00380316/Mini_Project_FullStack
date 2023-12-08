import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email } = await req.json();
        const resUserExists = await fetch("http://localhost:5000/register/userCheck", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email
        }),
        });
        return NextResponse.json({ resUserExists });
    } catch (error) {
        console.log(error);
    }
}
