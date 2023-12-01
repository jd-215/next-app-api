import mongoose from "mongoose";
import { CONNECT_DB_URL } from "../db";

export async function connectToDB() {
    try {
        mongoose.connect(CONNECT_DB_URL!);
        const connection = mongoose.connection;

        connection.on("open", () => {
            console.log("MongoDB Connected");
        })
        connection.on("error", () => {
            console.log("MongoDB Connection Error");
            process.exit();
        })
    }catch (error) {
        console.log(error);
    }
}