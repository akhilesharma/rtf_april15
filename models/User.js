const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name must be required"]
    },          
    username: {
        type: String,
        unique: true,
        required: [true, "Username must be required"]
    },
    email: {
        type: String,
        required: [true, "User email must be required"]
    },
    phone: {
        type: String,
        required: [true, "User phone must be required"]
    },
    password: {
        type: String,
        required: [true, "User password must be required"]
    },
    addressline1: {
        type: String,
        default: ""
    },
    addressline2: {
        type: String,
        default: ""
    },
    addressline3: {
        type: String,
        default: ""
    },
    pin: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pic: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: "User"
    },
    tokens: [],
    
    otp: {
        type: Number,
        default: -1
    }


})
const User = mongoose.model("User", UserSchema)
module.exports = User         