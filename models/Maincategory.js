const mongoose = require("mongoose")
const MaincategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required:[true,"Maincategory must be required"]
    }
})
const Maincategory = new mongoose.model("Maincategory",MaincategorySchema)
module.exports=Maincategory         