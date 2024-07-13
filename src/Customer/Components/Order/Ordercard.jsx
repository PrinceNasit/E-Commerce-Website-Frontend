import { Adjust } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


const Ordercard = ()=>{
    const navigate=useNavigate();
    return(
        <div onClick={()=> navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="h-[5rem] w-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
                        <div className="ml-5 space-y-2">
                            <p className="mb-2">Men Regular Fit Solid Cut Away Collar Formal Shirt</p>
                            <p className="opacity-50 text-xs font-semibold space-x-">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold space-x-">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹999</p>
                </Grid>
                <Grid item xs={4}>
                   { true &&
                   <div> <p>
                    <Adjust sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>
                            Delivered On March 03
                        </span>
                    </p>
                    <p className="text-xs">
                        Your Item has been Delivered.
                    </p>
                    </div>}
                   { false && <p>
                        <span>
                           Expected Delivery On March 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default Ordercard;