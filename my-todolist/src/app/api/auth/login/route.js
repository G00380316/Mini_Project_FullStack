import { NextResponse } from "next/server";

export async function POST(req) {
try {
    
    const { email, password } = await req.json();
    const hashedPassword = password;

    const resUserExists = await fetch("http://localhost:5000/auth/userCheck", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
    });
        
    const { user } = await resUserExists.json();
        
    if (!user) {
        return NextResponse.json({
            message: "User doesn't exists"
        }, { status: 500 });
    }
    
    if (resUserExists.ok) {
        const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({email ,hashedPassword}),
        });

        const userToken = await res.json();
        console.log("User Signed In: ", userToken);

        if (userToken.token) {
            return NextResponse.json(
            {
                message: "User has been signed in",
                userToken,
            },
            { status: 200 }
            );
        }
        
    } else {
        console.error("Error during user sign-in:", res.statusText);

        return NextResponse.json(
        {
            message: "Invalid credentials. Unable to sign in.",
        },
        { status: 401 }
        );
    }

    } catch (error) {
    console.error("Error while signing in user:", error);

    return NextResponse.json(
        {
        message: "An error occurred while signing in user",
        },
        { status: 500 }
    );
    }
}


