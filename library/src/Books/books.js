import React from 'react';
import './books.css';
import { NavBar } from '../navbar/navbar';

let data;

export class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList:''
        }
        this.bookData = this.bookData.bind(this);
    }

    componentDidMount() {
        fetch('http://10.11.7.59:8080/book-data')
        .then( res => {
            res.json()
            .then(resp => data = resp)
        } )
    }
    
    bookData() {
        let count = 0;
        console.log(data)
       this.setState({
        bookList: data.map(function(item){
            count++;
            return (
                <tr key={item._id}>
                    <th scope="row">{count}</th>
                    <td>{item.bookId}</td>
                    <td>{item.bookName}</td>
                    <td>{item.author}</td>
                    <td>{item.publisher}</td>
                    <td>{item.bookCount}</td>
                </tr>
            )
        }) 
       }) 
    }
    render () {
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
            {this.state.bookList}
        </tbody>
        </table>
        </div>
        </div>
        );
    }
}