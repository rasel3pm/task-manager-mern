const Order = require("../model/orderModel")
exports.createOrder = async (req,res)=>{
    try{
        const {product,quantity,totalPrice,customer,shippingAddress,paymentMethod,status} =req.body
        const order = await new Order({
            product,
            quantity,
            totalPrice,
            customer,
            shippingAddress,
            paymentMethod,
            status
        })
        const newOrder = await order.save()
        res.status(200).json({message:"Order created successfully",newOrder})
    }catch (err){
        res.status(204).json({message:"Order Not created",err})
    }
}