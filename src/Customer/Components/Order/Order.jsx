import { Grid } from "@mui/material";
import React from "react";
import Ordercard from "./Ordercard";
import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "../../../State/Order/Action";
const orderStatus =[
    {label:"On The Way",value:"on_the_way"},
    {label:"Deliverd",value:"delevered"},
    {label:"Cancelled",value:"cancelled"},
    {label:"Returned",value:"returned"},
   
]

const Order = ()=>{
    const {auth}=useSelector(store=>store);
    const {order}=useSelector(store=>store);
    const dispatch=useDispatch();
    // console.log(auth.user);
    // dispatch(orderHistory(auth.user));
    // console.log(order.order[1]);
    // console.log(order.order);

    let orders=[];

    order.order?.forEach(ele => {
        // console.log(ele);
        ele.orderItems.forEach(item => {
            orders.push(item);
        });
    });
    console.log(orders);
    return(
        <div className="px-5 lg:px-20">
            <Grid container sx={{justifyContent:"space-between"}}>
                <Grid item xs={2.5}>
                    <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                        <h1 className="font-bold text-lg">Filter</h1>
                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">ORDER STATUS</h1>
                           {orderStatus.map((option)=>
                        <div className="flex items-center">
                        <input type="checkbox" defaultValue={option.value} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"  />
                         <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>{option.label}</label>
                       </div>
                        )}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-5">  
                        {orders.map((item)=> <Ordercard item={item}/>) } 
                        </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order;