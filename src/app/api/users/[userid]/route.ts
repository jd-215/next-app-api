import { user } from "@/util/db";
import { NextResponse } from "next/server";

type jasonValueObjects = {
	[key: string]: {
		id: number;
		name: string;
		age: number;
		email: string;
	};
};

type jasonValueArrays = Array<jasonValueObjects>;

type T = jasonValueObjects | jasonValueArrays;

export async function GET(
	req: unknown,
	Content: { params: { userid: string } }
): Promise<NextResponse<unknown | T>> {
	const { userid } = Content.params;
	console.log(userid);

	const dataObj = () => {
		if (Object.keys(user).includes(userid)) {
			return user[userid];
		} else {
			return {
				message: "User not found",
			};
		}
	};
	const dataValue = dataObj();
	const nextResponse: NextResponse<unknown | T> = new NextResponse(
		JSON.stringify({ result: dataValue }),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	return nextResponse;
}

export async function PUT(
	request: any,
	content: unknown
): Promise<NextResponse<unknown | T>> {
	let payload = await request.json();
	let message: string = "error in data incomming";
	console.log(typeof payload.id);
	if (
		typeof payload.id === "number" &&
		Object.keys(user).includes(String(payload.id))
	) {
		user[String(payload.id)].name = payload.name;
		user[String(payload.id)].age = payload.age;
		user[String(payload.id)].email = payload.email;
		message = "success";
	}

	return new NextResponse(JSON.stringify({ result: message, data: user }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function DELETE(
	request: any,
	content: any
): Promise<NextResponse<unknown | T>> {
	let payloadId = content.params.userid;
	console.log(payloadId);
	return new NextResponse<unknown | T>(
		JSON.stringify({
			result: "user delete success ",
			message: "removed id = " + payloadId,
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}
