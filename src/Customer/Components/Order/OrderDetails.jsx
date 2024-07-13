import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder } from "@mui/icons-material";


const OrderDetails = ()=>{
return(
    <div className="px-5 lg:px-20">
        <div>
            <h1 className="font-bold text-lg py-7">Delivery Addredd</h1>
            <AddressCard/>
        </div>
        <div className="py-20">
            <OrderTracker activeStep={3}/>
        </div>
        <div>
            <Grid container className="space-y-5">
                {[1,1,1,1,1].map((item)=>
                <Grid item container className="shadow-xl rounded-md p-5 border"
                sx={{alignItems:"center",justifyContent:"space-between"}}>
                        <Grid item xs={6}>
                            <div className="flex items-center space-x-4">
                                <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
                                <div className="space-y-2 ml-5">
                                    <p className="font-semibold">Men Regular Fit Solid Cut Away Collar Formal Shirt</p>
                                    <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: Black</span>
                                    <span>Size: M</span></p>
                                    <p>Seller: El Senor</p>
                                    <p>₹299</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <Box sx={{color:deepPurple[500]}}>
                                <StarBorder sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                </Grid>)}
                
            </Grid>
        </div>
    </div>
)

}

export default OrderDetails;