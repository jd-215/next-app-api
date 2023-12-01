import { connectToDB } from "@/util/helpers/dbConfig";
import { UserModel } from "@/util/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		console.log(data);
        const { email, password } = data;
		// check if username exist

		const user = await UserModel.findOne({email : email});
        console.log("existing user details if available - ", user);
		if (user === null || user === undefined) {
			return new NextResponse(JSON.stringify({ message: "user not found" }), {
				status: 400,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
		// check password is correct or not
		const validPassword = await bcryptjs.compare(password, user.password);
		if (!validPassword) {
			return new NextResponse(
				JSON.stringify({ message: "invalid password" }),
				{
					status: 400,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		}
		// prepare the token data for the user
		const token = {
			id: user.id,
			username: user.username,
			email: user.email,
		};
		// create token
		const { JWT_SECRET_KEY } = process.env;
		const tokenData = jwt.sign(token, JWT_SECRET_KEY!, {
			expiresIn: "1d",
		});
		const response = new NextResponse(
			JSON.stringify({ message: "login success", data: tokenData }),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		response.cookies.set("token", tokenData, {
			httpOnly: true,
		});
		return response;
	} catch (error) {
		return new NextResponse(JSON.stringify(error), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
