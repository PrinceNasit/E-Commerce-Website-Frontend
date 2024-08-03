import { Adjust } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { useDispatch,useSelector  } from "react-redux";
import { useNavigate} from "react-router-dom";
import { orderHistory } from "../../../State/Order/Action";


const Ordercard = ({item})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {order}=useSelector(store=>store);
    const {auth}=useSelector(store=>store);
    const handle=()=>{
        dispatch(orderHistory(auth.user));
        console.log(order.order)
        navigate(`/account/order/${5}`);
    }
    return(
        <div onClick={handle} className="p-5 shadow-lg hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="h-[5rem] w-[5rem] object-cover object-top" src={item.product?.imageurl} alt="" />
                        <div className="ml-5 space-y-2">
                            <p className="mb-2">{item.product?.title}</p>
                            <p className="opacity-50 text-xs font-semibold space-x-">Size: {item?.size}</p>
                            <p className="opacity-50 text-xs font-semibold space-x-">Color:{item.product?.color}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹{item?.discountedPrice}</p>
                </Grid>
                <Grid item xs={4}>
                   { true &&
                   <div> <p>
                    <Adjust sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>
                            Delivered On June 26
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