import axios from "axios"
import { API_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const registerRequest=()=>({type:REGISTER_REQUEST})
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user})
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error})

const loginRequest=()=>({type:LOGIN_REQUEST})
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user})
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error})

const getUserRequest=()=>({type:GET_USER_REQUEST})
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user})
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error})

export const register=(userData)=> async (dispatch)=>{
    dispatch(registerRequest())
    try{
        const responce =await axios.post(`${API_URL}/auth/signup`,userData);
        const user = responce.data
        console.log(user);
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
        }
        console.log(user);
        dispatch(registerSuccess(user.jwt));
    }
    catch(err){
        dispatch(registerFailure(err.message));
    }
}


export const login=(userData)=> async (dispatch)=>{
    dispatch(loginRequest())
    try{
        const responce =await axios.post(`${API_URL}/auth/signin`,userData)
        const user = responce.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
        }
        console.log(user);
        dispatch(loginSuccess(user.jwt));
    }
    catch(err){
        dispatch(loginFailure(err.message));
    }
}



export const getUser=(jwt)=> async (dispatch)=>{
    dispatch(getUserRequest())
    try{
        const responce =await axios.get(`${API_URL}/api/users/profile`,{
            headers:{
                'Authorization':`Bearer ${jwt}`
            }
        })
        const user = responce.data;
        // console.log(user)
        dispatch(getUserSuccess(user));
    }
    catch(err){
        dispatch(getUserFailure(err.message));
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null});
    localStorage.clear();
}
