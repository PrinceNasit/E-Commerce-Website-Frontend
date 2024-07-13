import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import api from '../../config/apiConfig'


export const findProducts=(Data)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=Data;

    try{
        // console.log(colors);
        const {data}=await api.get(`/api/products?color=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&
            stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
            // console.log(data);
            dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data});

    }
    catch(err){
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:err.message});
    }
}

export const findproductById=(data)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST});

    const {productId}=data;
    try{
        const {data}=await api.get(`/api/products/id/${productId}`);

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data});
    }
    catch(err){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:err.message});

    }
}