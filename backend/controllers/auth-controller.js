import User from "../model/user.js";
import bcrypt from "bcryptjs"
import dotenv from "dotenv";
import Verification from "../model/verification.js";
dotenv.config();

const registerUser = async(req,res)=>{
    try{

        const {email , name , password} = req.body;
        
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message : "Email id already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const newUser =await User.create({
            email,
            password : hashedPassword,
            name,
        })

        const verificationToken = jwt.sign(
            {userId : newUser._id , property: "email-verification"},
            process.env.JWT_SECRET_KEY,
            {expiresIn : "1h"}
        )

        await Verification.create({
            userId : newUser._id,
            token : verificationToken ,
            expiresAt : new Date(Date.now() + 1*60*60*1000),
        })

        //send email
        const verificationLink = `${process.env.FRONTEND_URL}/verify-email/?token=${verificationToken}`
        const emailBody = `<p> Click <a href=${verificationLink}>here</a> to verify your link`;
        const emailSubject = "Verify your email";

        res.status(201).json({
            message : "Verification email sent to your email . Please check and verify your accout ."
        })

    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            message: " Internal server error"
        })
    }
}

const loginUser = async(req,res)=>{

}

export {registerUser,loginUser};