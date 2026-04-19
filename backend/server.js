import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import routes from  "./routes/index.js"
import connectDB from "./db/db.js";

const app = express();
connectDB();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET" , 'POST' , 'DELETE' , "PUT"],
    allowedHeaders: ['Content-Type' , "Authorization"],
    credentials : true ,
}));
app.use(morgan("dev"));

app.use(express.json());
app.get('/' , (req,res)=>{
    res.status(200).json({
        message : "Welcome to TaskHub"
    });
});

app.use("/api-v1" , routes);

app.use((req,res)=>{
    res.status(404).json({
        message: "Not found",
    });
});

//error middleware
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: " Internal Server error "
    });
});

app.listen(5000 , (req,res)=>{
    console.log("server started ");
})