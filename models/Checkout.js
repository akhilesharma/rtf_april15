const mongoose = require("mongoose")
const CheckoutSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User ID must be required"]
    },
    mode: {
        type: String,
        default:"COD"
    },
    status: {
        type: String,
        default:"Order Placed"
    },
    paymentstatus: {
        type: String,
        default:"Pending"
    },
    totalamount: {
        type: Number,
        required: [true, "Checkout Total Amount must be required"]
    },
    shippingamount: {
        type: Number,
        required: [true, "Checkout Shipping Amount must be required"]
    },
    finalamount: {
        type: Number,
        required: [true, "Checkout final Amount must be required"]
    },
    rppid: {
        type: String,
        default:""
    },
    date: {
        type: String,
        default:""
    },
    product: [{
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
            default: 1
        },
        total: {
            type: Number,
            required: [true, "Checkout Total must be required"]
        },
        pic: {
            type: String,
            default: ""
        }
    }]

})
const Checkout = new mongoose.model("Checkout", CheckoutSchema)
module.exports = Checkout         