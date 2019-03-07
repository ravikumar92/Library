import { LOGIN_REQUEST } from '../action/types'

const initialState = {
    userName: '',
    password: '',
}

export default function (state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST: 
            return {
                ...state,
            }
        default:
        return state;
    }
}