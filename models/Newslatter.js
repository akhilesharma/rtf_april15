let mongoose = require("mongoose")

let NewslatterSchema = new mongoose.Schema({
    email: {
        type: String,
        unique:[true,"Email Already registered"],
        required: [true, "Email Address Must Required"]
    }
})
let Newslatter =  mongoose.model("Newslatter", NewslatterSchema)
module.exports = Newslatter