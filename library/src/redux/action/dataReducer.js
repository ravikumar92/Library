import { GET_DATA, GET_DATA_FAILURE, GET_DATA_REQUEST } from './types';

import API from '../../api';

export const getData = () => (dispatch) => {
    dispatch({
        type: GET_DATA_REQUEST
    })
    
    API.getBookdata()
        .then(res => {
            if(res.length > 0) {
                dispatch({
                    type: GET_DATA,
                    payload: res
                })
            }
        })
        .catch((err) =>{
            dispatch({
                type: GET_DATA_FAILURE,
                payload: err
            })
        })
}