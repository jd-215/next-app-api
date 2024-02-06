import { connectToDB } from "@/util/helpers/dbConfig";
import { UserModel } from "@/util/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendMail } from "@/util/helpers/mailer";

connectToDB();

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		// console.log(data);
        const { email } = data;
		// check if username exist

		const user = await UserModel.findOne({email : email});
        // console.log("existing user details if available - ", user);
		if (!user) {
			return new NextResponse(JSON.stringify({ message: "user not found" }), {
				status: 400,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
        // generate link to reset password

        if (user) {
            await sendMail(user.email,"RESET", user._id);
            return new NextResponse(JSON.stringify({ message: "Reset password link sent", data: user }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            })
	}
}
catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
        status: 400,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
}




