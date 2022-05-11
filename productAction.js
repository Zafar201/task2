import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from "../constants/generalConstants";
import axios from 'axios'
export const getProducts=()=>async(dispatch)=>{
    dispatch({type:PRODUCT_LIST_REQUEST})
    try{
        const {data} = await axios.get('https://fakestoreapi.com/products/')
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }catch(error){
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                :error.message;
        dispatch({ type: PRODUCT_LIST_FAIL, payload: message })
    }
}