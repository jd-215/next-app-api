//create a nextjs custom  api response
import { NextResponse } from "next/server";
import { jsonDataTypes, statusCode } from "./apiTypes";


export default async function apiResponse(data: jsonDataTypes, status:statusCode ): Promise<NextResponse> {
    return new NextResponse(JSON.stringify(data), {
        status: status,
        headers: {
            "Content-Type": "application/json",
        },
    });
}