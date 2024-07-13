import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Cart from "../Customer/Components/Cart/Cart";
import Product from "../Customer/Components/Product/Product";
import Footer from "../Customer/Components/Footer/Footer";
import Navigation from "../Customer/Components/Nevigation/Nevigation";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import CheckOut from "../Customer/Components/CheckOut/CheckOut";
import Order from "../Customer/Components/Order/Order";
import OrderDetails from "../Customer/Components/Order/OrderDetails";


const CustomerRouters = ()=>{
    return(
        <div>
            <div>
            <Navigation/>
            </div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<HomePage/>}/>
                <Route path="/register" element={<HomePage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}/>
                <Route path="/product/:productId" element={<ProductDetails/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
                <Route path="/account/order" element={<Order/>}/>
                <Route path="/account/order/:orderId" element={<OrderDetails/>}/>
            </Routes>
            <div>
            <Footer/>
            </div>
        </div>
    )
}

export default CustomerRouters;
