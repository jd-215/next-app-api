import { connectToDB } from "@/util/helpers/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "@/util/models/user.model";

connectToDB();

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const token = data.token;
        console.log("incoming token data -", token);

        const user = await UserModel.findOne({ verifyToken: token });

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User not found " }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        console.log("existing user details if available - ",user);

        user.isVarified = true;
        user.verifyToken = undefined;
        user.verifyExpiry = undefined;
        await user.save();

        return new NextResponse(JSON.stringify({ message: "User verified successfully", data : user }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            }
        })
    

    }catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}