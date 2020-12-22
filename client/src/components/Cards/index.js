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
                              <h2 id="project-title">STARPLANNR App</h2>
                              <img className=" card-img-top" src="../../images/Starplannr App.jpg" alt="..."/>
                              
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://mslee001.github.io/StarPlannr/index.html" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/mslee001/StarPlannr" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                  </div>
                  <div className="row" id="card-row">
                      <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Eat-Da-Burger App</h2>
                              <img className=" card-img-top" src="../../images/Eat-Da Burger home.png" alt="..."/>
                              <br></br>
                              <img className=" card-img-top" id="bottomImg" src="../../images/Burger 2.png" alt="..."/>
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://eat-da-burgs-app.herokuapp.com/" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/davidnjaffe/burger" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                 <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Note taker App</h2>
                              <img className=" card-img-top" src="../../images/Note Taker Home.png" alt="..."/>
                              <br></br>
                              <img className=" card-img-top" id="bottomImg" src="../../images/Note Taker App.png" alt="..."/>
                              
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://still-atoll-52455.herokuapp.com/" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/davidnjaffe/Note-Taker" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                  </div>
                  <div className="row" id="card-row">
                      <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Workday Planner App</h2>
                              <img className=" card-img-top" src="../../images/Workday Planner App.jpg" alt="..."/>
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://davidnjaffe.github.io/Work-Day-Scheduler/Develop/" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/davidnjaffe/Work-Day-Scheduler" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                 <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Weather Dashboard App</h2>
                              <img className=" card-img-top" src="../../images/Weather Dashboard.jpg" alt="..."/>
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://davidnjaffe.github.io/weather-dashboard" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/davidnjaffe/weather-dashboard" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
                  </div>
                  <div className="row" id="card-row">
                      <div className="col-md-6">
                          <div className="card">
                              <h2 id="project-title">Random Password Generator</h2>
                              <img className=" card-img-top" src="../../images/Random Password Generator.jpg" alt="..."/>
                              <br></br>
                              <div className=" card card-body">
              <ul id="project-links">
                <li><a href="https://davidnjaffe.github.io/js-random-password-generator" target="blank"><h4>TRY THE APP</h4></a></li>
                <li><a href="https://github.com/davidnjaffe/js-random-password-generator" target="blank"><h4>VIEW THE CODE</h4></a></li>
              </ul>
            </div>
              </div>
                 </div>
            
                  </div>
                  <div className="row" id="resume-block">
      <div className="col-md-12">
        <a href="../../images/David-Jaffe.pdf" target="blank"><h4>VIEW RESUME</h4></a>

      </div>
    </div>





                  </div>
         

          
            
          
        );
      }
}