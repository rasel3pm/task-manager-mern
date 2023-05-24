const mongoose = require("mongoose")
const {Schema} = mongoose

const orderSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        require:true
    },
    quantity :{
        type:Number,
        require: true
    },
    totalPrice:{
        type: Number,
        require: true
    },
    customer:{
        type:Schema.Types.ObjectId,
        require:true
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Bank Transfer'],
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    }
},{timestamps:true,versionKey:false})

const Order = mongoose.model("Order",orderSchema)
module.exports = Order