import { connectToDB } from "@/util/helpers/dbConfig";
import { UserModel } from "@/util/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();



export async function POST(request: NextRequest): Promise<NextResponse> {
	const data = await request.json();
	const tokenPassword = data.token;
	console.log("varified password token -",  tokenPassword);

	const user = await UserModel.findOne({
		forgotPasswordToken: tokenPassword,
		forgotPasswordExpiry: { $gt: Date.now() },
	});

	if (!user) {
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
	const token = {
		id: user.id,
		username: user.username,
		email: user.email,
	};
	const { JWT_SECRET_KEY } = process.env;
	const tokenData = jwt.sign(token, JWT_SECRET_KEY!, {
		expiresIn: "1d",
	});

	const response = new NextResponse(
		JSON.stringify({ message: "reset password data", prop:'reset' }),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
    // set cookie for 30 minutes
	const expiryTime = new Date();
	expiryTime.setTime(expiryTime.getTime() + 30 * 60 * 1000); // 30 minutes from now

    // set cookie with token
	response.cookies.set("token", tokenData, {
		httpOnly: true,
		expires: expiryTime,
	});
	return response;
}

