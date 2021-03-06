import React from 'react';
import { Link } from 'react-router-dom';


export class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
         <Link to="/books"> <p className="dropdown-item" >Books</p> </Link>
         <Link to="/issue"><p className="dropdown-item" >Issue</p></Link> 
         <Link to="/return"><p className="dropdown-item" >Return</p></Link> 
          <div className="dropdown-divider"></div>
          <Link to="/setting"><p className="dropdown-item" >Setting</p></Link>
          <Link to="/"><p className="nav-link " aria-disabled="true">Logout</p></Link> 
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        )
    }
}