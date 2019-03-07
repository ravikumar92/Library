import { REGISTRATION_REQUEST } from './types';
import { history } from '../../history/history'

export const registration = (postData) => (dispatch) => {
    console.log("IN ACTIONS REGISTRATION")
fetch('http://10.11.7.59:8080/register-user',{
            method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(postData)
        })
        .then((res) => res.json())
        .then((resp) => {
            console.log(resp)
            if (resp.status == true) {
                dispatch({
                    type: REGISTRATION_REQUEST,
                    payload: {"message":resp.message,"data":postData, "submitted":true}
                })
                // alert("User created Successfully!")
                // history.push('/')
            } else if(resp.message) {
                alert(resp.message);
            }
             else {
                dispatch({
                    type: REGISTRATION_REQUEST,
                    payload: resp.message
                })
                alert("Error creating User!"); 
            }
        });
    }