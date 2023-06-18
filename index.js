import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Successfully connected to MongoDb database");
    } catch (error) {
        handleError(error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});

app.get("/", (req, res) => {
    res.send("Hello First Request!")
})

app.listen(8800, () => {
    connect()
    console.log("Backend server is running!")
})