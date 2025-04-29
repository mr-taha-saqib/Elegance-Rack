//import { currency } from "../../AdminPanel/src/App.jsx";
//import Product from "../../Frontend/src/pages/Product.jsx";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'


//global variables
const currency ='pkr'
const deliveryCharge=10

//gateway initialize
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

//placing orders using COD
const placeOrder = async (req,res)=>{

try {
    const {userId,items,amount,address}=req.body;
     
    const orderData={
        userId,items,address,amount,paymentMethod:"COD",payment:false,date:Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}})
     res.json({success:true,message:"Order Placed"})


} catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
}

}

// //placing orders using STRIPE
// const placeOrderStripe = async (req,res)=>{
//     try {
//         const {userId,items,amount,address}=req.body;
//         const {origin}=req.headers;
//         const orderData={
//             userId,items,address,amount,paymentMethod:"STRIPE",payment:false,date:Date.now()
//         }
//         const newOrder = new orderModel(orderData)
//     await newOrder.save()
// const line_items = items.map((item)=>({
//     price_data:{
//         currency:currency,
//         product_data:{
//             name:item.name
//         },
//         unit_amount:item.price * 100
//     },
//     quantity:item.quantity
// }))
// line_items.push({
//     price_data:{
//         currency:currency,
//         product_data:{
//             name:'Delivery Charges'
//         },
//         unit_amount:deliveryCharge * 100
//     },
//     quantity:1 

// })
// const session =await stripe.checkout.sessions.create({
//     success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
//     cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
//     line_items,
//     mode:'payment',
// })
// res.json({success:true,session_url:session.url})

//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:error.message})
//     }
// }

const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        // Create order data
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "STRIPE",
            payment: false,
            date: Date.now(),
        };

        // Save the order in the database
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Log items for debugging
        console.log("Items received for Stripe Checkout:", items);

        // Construct line_items array for Stripe Checkout
        const line_items = items.map((item) => {
            if (!item.name || !item.price || !item.quantity) {
                throw new Error(
                    "Invalid item data. Each item must include name, price, and quantity."
                );
            }

            return {
                price_data: {
                    currency: currency,
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100, // Convert to cents for Stripe
                },
                quantity: item.quantity, // Ensure `quantity` is correct
            };
        });

        // Add delivery charges as a separate line item
        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: deliveryCharge * 260,
            },
            quantity: 1,
        });

        // Create Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: "payment",
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.error("Error in placeOrderStripe:", error.message);
        res.json({ success: false, message: error.message });
    }
};
//verify stripe
const verifyStripe=async(req,res)=>{
    const {orderId,success,userId}=req.body
    try {
        if (success==="true") {
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
       await userModel.findByIdAndUpdate(userId,{cartData:{}})
       res.json({success:true})
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//placing orders using RAZOR PAY
const placeOrderRazorPay = async (req,res)=>{
    
}

//All orders data for admin panel
const allOrders = async (req,res)=>{
 try {
    const orders=await orderModel.find({})
    res.json({success:true,orders})
 } catch (error) {
    console.log(error);
        res.json({success:false,message:error.message})
        
 }   
}

//USer Order Data For frontend
const userOrders = async (req,res)=>{
    try {
        const {userId}=req.body
        const orders=await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
           
    }
}

//update order status for admin panel
const updateStatus = async (req,res)=>{
    try {
        const {orderId,status}=req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {placeOrder,placeOrderStripe,verifyStripe,placeOrderRazorPay,allOrders,userOrders,updateStatus}
