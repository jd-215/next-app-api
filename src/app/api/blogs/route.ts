import { NextRequest, NextResponse } from "next/server";
import { BlogModel } from "@/util/models/blogs.model";
import { connectToDB } from "@/util/helpers/dbConfig";
import { getDataFromToken } from "@/util/helpers/getDataFromToken";

interface MyObject {
	userID: string;
	topic: string;
	message: string;
	date: string;
	comments: {
		[key: string]: {
			userID: string;
			comment: string;
			date: string;
		};
	};
}

connectToDB();

// get default blog data for user
// retrive only five latest blog'
// sort it by latest blog
// add pagination to it for next and previous five blogs

export async function GET(req: NextRequest): Promise<NextResponse> {
   const reqPageIndex: {}  | unknown= req.body;
   console.log(reqPageIndex);
   try{ 
            const UserID = await getDataFromToken(req);
            const user = await BlogModel.find({userID: UserID}).sort({date: -1}).limit(5);

    
        return new NextResponse(JSON.stringify({
            message: "blog details",
            data: user
        }))
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"error in data incomming data"}), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}



export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {

    //check for user in token 
    // check for user in db
    // check if the user is avaliable then create the blog

    // if the above connditions are not satisfied then return an error


    const data = req.json();
    const blogData = await BlogModel.create(data);
    return new NextResponse(JSON.stringify({
        message: "blog details",
        data: blogData
    }))
}
