import React, { Component } from 'react';
import { Link } from 'react-router';
import "./style.css";


export default class Header extends Component {
    render() {
        return (
          
            
            <div className="row" >
          <div className=" header col-md-12" id="nav-bar">
              <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
      <a className="navbar-brand" href="/">DAVID JAFFE</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" href="#/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>  
    </div>
            </div>
            
          
        );
      }
}