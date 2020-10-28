import mongoose from "mongoose"

const User = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        default:""
    },
    imageID:{
        type:String,
        default:""
    },
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }]

})

const UserModel = mongoose.model("User",User)

export default UserModel