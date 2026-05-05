import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("Database Connected")
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;
