import {SUCCESS,FAILURE,WAITING,BASE_URL} from '../utils/Constant';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: BASE_URL,
  responseType: 'json'
});
axiosMiddleware(client);
//
export function getRemoteRequest() {

    return (dispatch) => {
        dispatch(getWaiting())
        client.get('5d889c8a3300002c0ed7da42')
       .then((response) => {
               console.log('response Data is '+response.data.items[0].wallet2);
               return(dispatch(getSuccess(response)))
           }, (error) => {
               console.log('erro Data is '+error);
               return(dispatch(getFailure()))
       });
    }
}

function getWaiting() {
    return {
        type: WAITING
    }
}

function getSuccess(data) {
    return {
        type: SUCCESS,
        data
    }
}

function getFailure() {
    return {
        type: FAILURE
    }
}
