import nodemailer from "nodemailer";

import { UserModel } from "../models/user.model";
import bcryptjs from "bcryptjs";

export const sendMail = async (email: string, emailType:string, userID: string ) => {
    try {
       const hasedToken = await bcryptjs.hash(userID.toString(), 10)
        // console.log(email, emailType, userID);
       if (emailType === "VERIFY") {
            const updatedUser =   await UserModel.findByIdAndUpdate(userID, {
             verifyToken: hasedToken,
             verifyExpiry: Date.now() + 3600000
           })
        //    console.log("updated user", updatedUser)

       } else if (emailType === "RESET") {
        const updatedUser =   await UserModel.findByIdAndUpdate(userID, {
             forgotPasswordToken: hasedToken,
             forgotPasswordExpiry: Date.now() + 3600000
           })
           
        //    console.log("updated user", updatedUser)
       }

       const transporter =  nodemailer.createTransport({

            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: `${process.env.MAIL_USERNAME}`,
              pass: `${process.env.MAIL_PASSWORD}`,
              // todo : add these to environment variable
            }
       })
       const mailOptionsverify = {
           from: 'next@example.com',
           to: email,
           emailType: 'Reset Password',
           subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
           html: `<p> Click <a href=${process.env.DOMAIN}/verifyemail?token=${hasedToken}>here</a> to verify your password</p>`
       }

       const mailOptionsforgotPassword = {
        from: 'next@example.com',
        to: email,
        emailType: 'Reset Password',
        subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
        html: `<p> Click <a href=${process.env.DOMAIN}/login/resetpassword?token=${hasedToken}>here</a> to reset your password</p>`
    }


       const responseInfo = await transporter.sendMail(emailType === "VERIFY" ? mailOptionsverify : mailOptionsforgotPassword)
    //    console.log("Message sent: %s", responseInfo.messageId)

       return responseInfo

    } catch (error: any) {
        throw new Error(error.message);
    }
}