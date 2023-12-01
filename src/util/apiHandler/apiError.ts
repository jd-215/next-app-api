import { NextResponse } from "next/server";
import { jsonDataTypes, statusCode } from "./apiTypes";

export default async function apiErrorResponse(data: jsonDataTypes, status: statusCode): Promise<NextResponse> {

    // send error response in json
    // set appropriate status code
    
    return new NextResponse(JSON.stringify(data), {
        status: status,
        headers: {
            "Content-Type": "application/json",
        },
    });
}