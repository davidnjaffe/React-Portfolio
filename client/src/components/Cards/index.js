import React, { Component } from 'react';
import "./style.css";



export default class Cards extends Component {
    render() {
        return (
          
          
            <div>
            <div className="row" id="hero-header">
                    <div className="col-md-12">
                      <h1>Web Development Portfolio</h1>
                    </div>
                  </div>
                  <div className="row" id="card-row">
                      <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Movie Connector</h2>
                              <img className=" card-img-top" src="../../images/Movie Connect Home.png" alt="..."/>
                              <br></br>
                              <img className=" card-img-top" id="bottomImg" src="../../images/Movie Connect Profile.png" alt="..."/>
                              <br></br>
                              <img className=" card-img-top"id="bottomImg2" src="../../images/Movie Connect Cards.png" alt="..."/>
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://film-connector.herokuapp.com/" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/kpegeder/Minder" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                 <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Movie Connector</h2>
                              <img className=" card-img-top" src="../../images/Movie Connect Home.png" alt="..."/>
                              <br></br>
                              <img className=" card-img-top" id="bottomImg" src="../../images/Movie Connect Profile.png" alt="..."/>
                              <br></br>
                              <img className=" card-img-top"id="bottomImg2" src="../../images/Movie Connect Cards.png" alt="..."/>
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://film-connector.herokuapp.com/" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/kpegeder/Minder" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                  </div>





                  </div>
         

          
            
          
        );
      }
}