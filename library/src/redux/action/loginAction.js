import { LOGIN_REQUEST } from './types';
import { history } from '../../history/history'

export const login = (postData) => (dispatch) => {
    fetch('http://10.11.7.59:8080/login-user',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(postData)
    })
    .then((res) => res.json())
    .then((resp) => {
        if(resp.value == true) {
            dispatch({
               type: LOGIN_REQUEST,
                payload: resp.message
            })
            history.push('/home');
        } else {
            dispatch({
                type: LOGIN_REQUEST,
                 payload: resp.message
             })
        }
    })
}