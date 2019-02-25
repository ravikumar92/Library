import React from 'react';
import ReactDom from 'react-dom';
import { NavBar } from '../navbar/navbar'

export class Home extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        return (
            <NavBar />
        )
    }
}