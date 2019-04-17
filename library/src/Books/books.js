import React from 'react';
import './books.css';
import { connect } from 'react-redux'
import  { getData }  from '../redux/action/dataReducer';
import { NavBar } from '../navbar/navbar';

let data;

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            isFetching: false,
            errorMEssage: ''
        }
        this.bookData = this.bookData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bookList: nextProps.bookList,
            isFetching: nextProps.isFetching,
            errorMEssage: nextProps.errorMEssage
        })
    }
    
    bookData() {
        this.props.dispatch(getData());
    }
    render () {
        let item;
        let count = 0;
        if(this.state.isFetching == true) {
            item = <div>Loading..</div>
        }
        else if (this.state.bookList.length > 0) {
            item = this.state.bookList.map(function(item){
                        count++;
                        return (
                            <tr key={item.id}>
                                <th scope="row">{count}</th>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.publisher}</td>
                                <td>{item.number}</td>
                            </tr>
                        )
                    }) 
        }
        else {
            item = <div> Data Not Available </div>
        }
        return (
        <div>
            <NavBar />
        <div className="sidenav">
            <a  href="#" onClick={this.bookData}>All</a>
            <a href="#" onClick={this.bookData}>Science</a>
            <a href="#" onClick={this.bookData}>Math</a>
            <a href="#" onClick={this.bookData}>Novels</a>
        </div>
        <div className="main">
        <table className="table">
        <thead>
        <tr>
        <th scope="col">S.no</th>
        <th scope="col">Id</th>
        <th scope="col">title</th>
        <th scope="col">author</th>
        <th scope="col">publisher</th>
        <th scope="col">In Stock</th>
        </tr>
        </thead>
        <tbody>
            {item}
        </tbody>
        </table>
        </div>
        </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

function mapStateToProps(state) { 
    return {
        bookList: state.data.bookList,
        isFetching: state.data.isFetching,
        errorMEssage:state.data.errorMEssage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)