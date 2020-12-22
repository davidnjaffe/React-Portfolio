import React, { Component } from 'react';
import "./style.css";



export default class Form extends Component {
    render() {
        return (
            <div className="row" id="form">
                <div className=" col-md-12 contactForm" id="contact-form">
          <div className="form-group">
             <label for="name">Name</label>
             <input type="name" class="form-control" id="namebox" aria-describedby="emailHelp"></input>
             </div>
             <label for="email">Email</label>
          <input type="email" class="form-control" id="emailbox"></input>
          <label for="message">Message</label>
          <input type="message" class="form-control" id="messagebox"></input>
          <div className="row" id="checkbox">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1">I'm most likley not a robot</label>
          </div>
          <div className="row" id="submit"><button type="submit" class="btn btn-primary">Submit</button></div>

          
          
             
          </div>


              
          </div>
    
         
            
          
        );
      }
}