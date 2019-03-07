import { combineReducers } from 'redux';
import loginReducer from './login_reducer'
import registerReducer from './register_reducer';

export default combineReducers({
    auth: loginReducer,
    reg: registerReducer
})