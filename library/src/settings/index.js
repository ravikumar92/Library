import React from 'react';
import { NavBar } from '../navbar/navbar';
import { SideBar } from './sidebar';
import  AddBook from './add_book';
import { RemoveBook } from './remove_book';

export class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addBook: false,
            removeBook: false,
            removeUser: false,
        }
        this.show = this.show.bind(this);
    }
    show(value) {
        if(value.addBook) {
            this.setState({
                addBook:value.addBook
            })
        }
        if(value.removeBook) {
            this.setState({
                addBook: false,
                removeBook:value.removeBook,
                removeUser: false,
            })
        }
        if(value.removeUser) {
            this.setState({
                addBook: false,
                removeBook: false,
                removeUser:value.removeUser
            })
        }
    }
    render() {
        const {addBook, removeBook, removeUser } = this.state;
        return (
            <div>
                <NavBar/>
                <AddBook/>
                {/* <SideBar template={this.show}/>
                {
                    addBook &&
                    <AddBook/>
                }
                {
                    removeBook &&
                    <RemoveBook/>
                } */}
            </div>
        )
    }
}