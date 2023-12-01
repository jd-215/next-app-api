import { NextResponse } from "next/server";

export async function GET() {
    try{
        const response = NextResponse.json({ message: "Logout successfully", success: true });
        response.headers.set("Content-Type", "application/json");
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        return response;
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    
}