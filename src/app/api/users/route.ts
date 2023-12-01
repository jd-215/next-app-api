import { CONNECT_DB_URL, user } from "@/util/db";
import { Person } from "@/util/schema/dataModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

type jasonValueObjects = {
	[key: string | number]: {
		id: number;
		name: string;
		age: number;
		email: string;
	};
};

type jasonValueArrays = Array<jasonValueObjects>;

type T = jasonValueObjects | jasonValueArrays;

export async function GET(
	request: any,
	content: any
): Promise<NextResponse<unknown | T>> {
	await mongoose
		.connect(CONNECT_DB_URL)
		.then((res: any) => {
			console.log("MongoDB Connected");
		})
		.catch((err) => {
			console.log(err);
		});

	// const data = await mongoose.modelNames();
	// console.log(data)

	const data = await Person.find({});
	console.log(data);

	// await Person.create({
	//     id: 0,
	//     name: "user 0",
	//     age: 0,
	//     email: "email 0",
	// })

	// const modelData = await mongoose.model("people").find();
	// console.log(modelData)

	return new NextResponse(
		JSON.stringify({ requestData: data, message: "deault by student route" }),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}
