import React from "react";
import { Button, Grid,Box, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";


const DeliveryAddressForm = ()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipcode:data.get("zip"),
            mobile: data.get("phoneNumber"),
        }
        const orderData={
            address,navigate 
        }
        dispatch(createOrder(orderData))
        console.log(address);
    }
    return(
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className="border rounded-md shadow-lg h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard/>
                        <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant="contained">Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item sx={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form action="" onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                   <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name"/> 
                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  
                                   <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="given-name"/> 
                                </Grid>
                                <Grid item xs={12}>
                                  
                                   <TextField required id="address" name="address" label="Address" multiline rows={4} fullWidth autoComplete="given-name"/> 
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  
                                   <TextField required id="city" name="city" label="City" fullWidth autoComplete="given-name"/> 
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  
                                   <TextField required id="state" name="state" label="State/Province/Region" fullWidth autoComplete="given-name"/> 
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  
                                  <TextField required id="zip" name="zip" label="zip / Postal code" fullWidth autoComplete="shipping postal-code"/> 
                               </Grid>
                               <Grid item xs={12} sm={6}>
                                  
                                  <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth autoComplete="given-name"/> 
                               </Grid>
                               <Grid item xs={12} sm={6}>
                               <Button type="submit" sx={{py:2,mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant="contained">Deliver Here</Button>
                               </Grid>
                            </Grid>
                        </form>
                    </Box>
                    </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm;