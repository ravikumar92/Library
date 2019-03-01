import React from 'react';
import './sidebar.css';
const spanStyle = {
    "fontSize": "30px",
    "cursor": "pointer"
}
export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.addBook = this.addBook.bind(this);
        this.removeBook = this.removeBook.bind(this);
        this.removeUser = this.removeUser.bind(this);

        
        this.state = {
            width: '0px',
            top:'60px'
        }
    }
    open() {
        this.setState({
            width:'250px'
        })
    }
    close() {
        this.setState({
            width:'0px'
        })
    }
    addBook () {
        this.props.template({addBook: true});
        this.close();
    }
    removeBook() {
        this.props.template({removeBook: true});
        this.close();
    }
    removeUser() {
        this.props.template({removeUser: true});
        this.close();
    }
    render() {
        return (
            <div>
                <div style= {this.state} id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.close}>&times;</a>
                    <a href="javascript:void(0)" onClick={this.addBook}>Add Book</a>
                    <a href="javascript:void(0)" onClick={this.removeBook}>Remove Book</a>
                    <a href="javascript:void(0)" onClick={this.removeUser}>Remove User</a>
                </div>
                <span style={spanStyle} onClick={this.open}>&#9776; open</span>
            </div>
        )
    }
}