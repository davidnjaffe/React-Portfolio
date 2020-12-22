import React, { Component } from 'react';
import "./style.css";



export default class Bio extends Component {
    render() {
        return (
          
          
            <div>
                <div className="row" id="bio">
            <div className="col-md-4" id="bio-pic">
           
             
              <img className="col-md-8" src="../../images/Outdoor Profile.jpg" alt="bio pic"/>
              
            
            
          </div>
          <div className="col-md-6">
          <h2>A FEW THINGS ABOUT ME</h2>
            <p>With over 10 years of experience as a design professional, David is closing the gap between web design and web development. His passion for building and problem solving has continued to evolve and is now seen as he works on building web applications from the ground up, hopefully with a little flare. David has worked tirelessly to succeed as a graphic designer and prides himself on his ability to work across many different facets in the world of specialty graphics in addition to digital media. As a native Portlander, David carries much of his hometowns cliche quirkiness with him at all times, allowing him to view the world in a different way. A fun and compassionate way.</p>
          </div>
          <div className="col-md-12"><br></br></div>
          <div className="col-md-12" id="tagline"><p>David’s journey into web development is something that he has always been interested in but always too sidetracked to take the plunge. The time has come! It’s time to code!</p></div>
          <div className="col-md-12" id="bottom"><br></br></div>
          
          </div>
          </div>
         

          
            
          
        );
      }
}