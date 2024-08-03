import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder } from "@mui/icons-material";
import { useSelector } from "react-redux";


const OrderDetails = ()=>{
    const {order}=useSelector(store=>store);

    let orders=[];

    order.order?.forEach(ele => {
        // console.log(ele);
        ele.orderItems.forEach(item => {
            orders.push(item);
        });
    });
    console.log(order.order);
return(
    <div className="px-5 lg:px-20">
        <div>
            <h1 className="font-bold text-lg py-7">Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className="py-20">
            <OrderTracker activeStep={3}/>
        </div>
        <div>
            <Grid container className="space-y-5">
                {orders.map((item)=>
                <Grid item container className="shadow-xl rounded-md p-5 border"
                sx={{alignItems:"center",justifyContent:"space-between"}}>
                        <Grid item xs={6}>
                            <div className="flex items-center space-x-4">
                                <img className="w-[5rem] h-[5rem] object-cover object-top" src={item.product?.imageurl} alt="" />
                                <div className="space-y-2 ml-5">
                                    <p className="font-semibold">{item.product?.title}</p>
                                    <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: {item.product?.color}</span>
                                    <span>Size: {item?.size}</span></p>
                                    <p>Seller: {item.product?.brand}</p>
                                    <p>₹{item.product?.discountedPrice}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <Box sx={{color:deepPurple[500]}}>
                                {/* <StarBorder sx={{fontSize:"2rem"}} className="px-2 text-5xl"/> */}
                                {/* <span>Rate & Review Product</span> */}
                            </Box>
                        </Grid>
                </Grid>)}
                
            </Grid>
        </div>
    </div>
)

}

export default OrderDetails;