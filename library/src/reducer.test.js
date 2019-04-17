import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getDataReducer from './redux/reducer/get_data_reducer';
configure({ adapter: new Adapter() });

describe('GET DATA REDUCER',()=>{
    it('should get the books from the db', () => {
        let state = getDataReducer({},{type:"GET_DATA",payload: [{id: "112", title: "JavaScript", number: "9", author: "Daniel", publisher: "Tata", title: "JavaScript"}]});
        expect(state).toEqual({ isFetching:false, bookList: [{id: "112", title: "JavaScript", number: "9", author: "Daniel", publisher: "Tata", title: "JavaScript"}] })
    });
});


describe('POST DATA REDUCER',()=>{
    it('should get the books from the db', () => {
        let state = getDataReducer({},{type:"POST_DATA"});
        expect(state).toEqual({})
    });
});
