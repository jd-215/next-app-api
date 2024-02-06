
import { connectToDB } from "@/util/helpers/dbConfig";
import { UserModel } from "@/util/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import { sendMail } from "@/util/helpers/mailer";

connectToDB();

export async function POST(request: NextRequest ): Promise<NextResponse<unknown>> {

  try {
    const data = await request.json();
    // console.log(data);
    const {username, password, email} = data;
    // check if username exist
    const user = await UserModel.findOne({email});

    // console.log("existing user details if available - ",user);
    if (user) {
        return new NextResponse(JSON.stringify({ message: "user already exist" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        });
      } 
      // hash password
      const hashedPassword = await bcryptjs.genSalt(10);
      const passwordHash = await bcryptjs.hash(password, hashedPassword);
       const newUser = new UserModel({
        username,
        password: passwordHash,
        email,
      })
      const savedUser = await newUser.save();
      // console.log(savedUser);

      // send verification email
      await sendMail(savedUser.email,"VERIFY", savedUser._id);

      return new NextResponse(JSON.stringify({ message: "User created successfully", data: savedUser }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
  }
  catch (error) {
    return new NextResponse(JSON.stringify({ message: "error in data incomming", data: error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  // return new NextResponse(JSON.stringify({ message: "error in data incomming" }), {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
} 