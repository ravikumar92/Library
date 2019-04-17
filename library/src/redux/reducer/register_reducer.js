import { REGISTRATION_REQUEST } from '../action/types'
const initialState = {
    user: {
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    },
    message:'',
    submitted: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case REGISTRATION_REQUEST: 
            return {
                ...state,
                user: action.payload.data,
                message:action.payload.message,
                submitted: action.payload.submitted
            }
        default:
        return state;
    }
}