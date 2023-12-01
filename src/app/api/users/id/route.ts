import { getDataFromToken } from "@/util/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import { UserModel } from "@/util/models/user.model";
import { connectToDB } from "@/util/helpers/dbConfig";

connectToDB();

export async function GET(request: NextRequest) {
    try {
       const UserID = await getDataFromToken(request);
       const user = await UserModel.findOne({_id: UserID}).select("-password -isAdmin -isVarified");
       return new NextResponse(JSON.stringify({
        message: "user details",
        data: user
       }), {
           status: 200,
           headers: {
               "Content-Type": "application/json",
           },
       })
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"error in data incomming"}), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
