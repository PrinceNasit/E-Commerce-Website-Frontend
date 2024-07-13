import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
import api from '../../config/apiConfig'


export const getCart=()=>async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST})
    try{
        const {data}=await api.get(`/api/cart/`);
        dispatch({type:GET_CART_SUCCESS,payload:data});
        console.log(data);
    }
    catch(err){
        dispatch({type:GET_CART_FAILURE,error:err.message});
    }
}

export const addItemToCart=(Data)=>async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})
    try{
        const {data}=await api.put(`/api/cart/add`,Data);
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
        // console.log(data);
    }
    catch(err){
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,error:err.message})

    }
}

export const removeCartItem=(cartItemId)=>async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
    try{
        const {data}=await api.delete(`/api/cart_items/${cartItemId}`);
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId});
    }
    catch(err){
        dispatch({type:REMOVE_CART_ITEM_FAILURE,error:err.message})

    }
}

export const updateCartItem=(Data)=>async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    try{
        const {data}=await api.put(`/api/cart_items/${Data.cartItemId}`,Data.data);
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
    }
    catch(err){
        dispatch({type:UPDATE_CART_ITEM_FAILURE,error:err.message})

    }
}

