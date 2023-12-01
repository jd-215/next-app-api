import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    topic: {
        type: String,
        required: [true, "topic is required"],
    },
    message: {
        type: String,
        required: [true, "message is required"],
    },
    date: {
        type: String,
        required: [true, "date is required"],
    },
});

export const BlogModel = mongoose.models.blog || mongoose.model("Blog", blogSchema);