import React from "react";

const PaymentCard=({item})=>{
    return(
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.product?.imageurl} alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{item.product?.title}</span>
          <span className="float-right text-gray-400">Size: {item.size}</span> 
          <span className="float-right text-gray-400">{item.product?.brand}</span>
          <p className="mt-auto text-lg font-bold">₹{item.discountedPrice}</p>
        </div>
      </div>
    )
}

export default PaymentCard;