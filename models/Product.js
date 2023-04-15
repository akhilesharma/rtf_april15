const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name must be required"]
    },
    maincategory: {
        type: String,
        required: [true, "Product Maincategory must be required"]
    },
    subcategory: {
        type: String,
        required: [true, "Product Subcategory must be required"]
    },
    brand: {
        type: String,
        required: [true, "Product Brand must be required"]
    },
    color: {
        type: String,
        required: [true, "Product Color must be required"]
    },
    size: {
        type: String,
        required: [true, "Product Size must be required"]
    },
    baseprice: {
        type: Number,
        required: [true, "Product Base Price must be required"]
    },
    finalprice: {
        type: Number,
        required: [true, "Product Final Price must be required"]
    },
    discount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: "this is sample Product"
    },
    stock: {
        type: String,
        default: "In Stock"
    },
    pic1: {
        type: String,
        default: ""
    },
    pic2: {
        type: String,
        default: ""
    },
    pic3: {
        type: String,
        default: ""
    },
    pic4: {
        type: String,
        default: ""
    },



})
const Product = new mongoose.model("Product", ProductSchema)
module.exports = Product         