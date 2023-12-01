import mongoose from "mongoose";

interface Comment {
    userID: string;
    comment: string;
    date: string;
  }
  
  interface MyObject extends Document {
    userID: string;
    topic: string;
    message: string;
    date: string;
    comments: Record<string, Comment>;
  }

const  personModel = new mongoose.Schema({
    id: String,
    name: String,
    age: String,
    email: String,
});

const commentSchema = new mongoose.Schema({
    userID: String,
    comment: String,
    date: String,
})

const blogModel = new mongoose.Schema({
    id: String,
    topic: String,
    message: String,
    date: String,
    comments:{ type:Object, of: commentSchema},
})


export const Person = mongoose.models.people ||  mongoose.model("people", personModel);

export const Blog = mongoose.models.blog || mongoose.model("blog", blogModel);



