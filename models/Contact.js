const mongoose = require("mongoose")
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be required"]
    },

    email: {
        type: String,
        required: [true, "Email Address must be required"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number must be required"]
    },
    subject: {
        type: String,
        required: [true, "Subject must be required"]
    },
    message: {
        type: String,
        required: [true, "Message must be required"]
    },
    status: {
        type: String,
        default: "Active"
    },

    date: {
        type: String,
        default: ""
    }


})
const Contact = mongoose.model("Contact", ContactSchema)
module.exports = Contact         