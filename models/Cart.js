const mongoose = require("mongoose")
const CartSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User ID must be required"]
    },
    productid: {
        type: String,
        required: [true, "Product ID must be required"]
    },
    name: {
        type: String,
        required: [true, "Product Name must be required"]
    },
    color: {
        type: String,
        required: [true, "Product Color must be required"]
    },
    size: {
        type: String,
        required: [true, "Product Size must be required"]
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
    price: {
        type: Number,
        required: [true, "Product Price must be required"]
    },
    qty: {
        type: Number,
       default:1
    },
    total: {
        type: Number,
        required: [true, "Cart Total must be required"]
    },
    pic: {
        type: String,
        default:""
    }
})
const Cart = new mongoose.model("Cart", CartSchema)
module.exports = Cart         