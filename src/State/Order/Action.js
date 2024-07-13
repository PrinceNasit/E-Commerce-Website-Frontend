import api from '../../config/apiConfig'
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from './ActionType'

export const createOrder=(Data)=>async(dispatch)=>{
    try{
        console.log("rdhgijehdizdrs");
        dispatch({type:CREATE_ORDER_REQUEST});

        const {data}=await api.post(`/api/orders/`,Data.address);

        console.log(data);
        if(data._id){
            Data.navigate({search:`step=3&order_id=${data._id}`});
        }
       

        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    }
    catch(err){
        dispatch({type:CREATE_ORDER_FAILURE,payload:err.message});
    }
}

export const getOrderById=(orderId)=>async(dispatch)=>{
    try{
        dispatch({type:GET_ORDER_BY_ID_REQUEST});

        const {data}=await api.get(`/api/orders/${orderId}`);

        console.log(data);

        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})
    }
    catch(err){
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:err.message});
    }
}