import { connectToDB } from "@/util/helpers/dbConfig";
import { UserModel } from "@/util/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connectToDB();

export async function POST(request: NextRequest) {
    const { password, token } = await request.json();

    console.log("token extracted to reset password -", token);
    console.log("incoming password data -", password);

    // check token validity
    const user = await UserModel.findOne({
		forgotPasswordToken: token,
		forgotPasswordExpiry: { $gt: Date.now() },
	});

    console.log("user details -", user);
    if (!user || user.forgotPasswordToken === null) {
        return new NextResponse(
            JSON.stringify({ message: "reset password link expired" }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    //generate password
    if (password.length >= 8 && password.length <= 20 && user.forgotPasswordToken !== null) {
        
        
        const hashedPassword = await bcryptjs.genSalt(10);
        const passwordHash = await bcryptjs.hash(password, hashedPassword);
        user.password = passwordHash;
        user.forgotPasswordToken = null;
        user.forgotPasswordExpiry = null;
        

    }else{
        return new NextResponse(JSON.stringify({ message: "password length must be between 8 and 20 or token is expired" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const savedUser = await user.save()

    return new NextResponse(JSON.stringify({ message: "password reset successfully", data: savedUser }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    })
    
}
