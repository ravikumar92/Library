import React from 'react';
import './books.css';
import { NavBar } from '../navbar/navbar';
import { books_records } from '../data/books_data';

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
        fetch('http://localhost:8080/book-data')
        .then( res => {
            res.json()
            .then(resp => data = resp)
        } )
    }
    
    bookData() {
        let count = 0;
       this.setState({
        bookList: data.map(function(item){
            count++;
            return (
                <tr key={item.isbn}>
                    <th scope="row">{count}</th>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.published}</td>
                    <td>{item.publisher}</td>
                    <td>{item.number}</td>
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
        <th scope="col">title</th>
        <th scope="col">author</th>
        <th scope="col">published</th>
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