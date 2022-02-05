import { LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE } from "./cat.actionTypes";
import Axios from 'axios'

export const loadData = (dataURL) =>{
return async (dispatch) =>{
    try{
        dispatch({type: LOAD_DATA_REQUEST})
        // let dataURL = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1'
        let response = await Axios.get(dataURL)
        dispatch({type: LOAD_DATA_SUCCESS, payload:response.data})
    }
    catch(error){
        dispatch({type: LOAD_DATA_FAILURE, payload:error})
    }
}
}