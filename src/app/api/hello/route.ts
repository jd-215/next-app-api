import { NextRequest , NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    const data = req.json();
    // console.log(data);
    if (!data){
    return new NextResponse(JSON.stringify({
           message: "error in data incomming"
       }), {
           status: 400,
           headers: {
               "Content-Type": "application/json",
           },
       })
    }
    return new NextResponse(JSON.stringify({
            message: "success in data incomming"
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })
    
}