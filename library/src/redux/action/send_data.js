import { POST_DATA } from './types';
import API from '../../api';

export const postData = (data) => (dispatch) => {
    API.addBook(data)
    .then( res => {
        dispatch({
            type: POST_DATA,
            payload: res
        })
    })
}
