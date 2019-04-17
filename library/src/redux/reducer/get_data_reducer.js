import { GET_DATA, GET_DATA_REQUEST, GET_DATA_FAILURE } from '../action/types';
import { POST_DATA } from '../action/types';

const initialState = {
    bookList: [],
    errorMessage: '',
    isFetching: false
}
export default function (state = initialState, action) {
    switch(action.type) {
        case GET_DATA: 
            return {
                ...state,
                isFetching: false,
                bookList: action.payload
            }
        case GET_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case POST_DATA:
            return {
                ...state
            }
        default:
        return state;
    }
}