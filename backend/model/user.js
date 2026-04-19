import mongoose  , {Schema} from "mongoose";

const userSchema = new Schema({
    email : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true ,
        lowercase : true,
    },
    password : {
        type : String ,
        required : true ,
        trim : true
    },
    name : {
        type : String ,
        required : true ,
        select : false 
    },
    profilePicture : {
        type : String ,
    },
    isEmailVerified : {
        type : Boolean ,
        default : false
    },
    lastLogin : {
        type : Date 
    },
    is2FAenabled : {
        type : Boolean , default : false
    },
    twoFAotp : {
        type : String , select : false 
    },
    twoFAotpExpires : {
        type: Date ,
        select : false 
    }
},{timestamps : true});

const User = mongoose.model("User" , userSchema);
export default User;