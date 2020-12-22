import React, { Component } from 'react';

import "./style.css";


export default class Footer extends Component {
    render() {
        return (
          
            // fixed-bottom //
            <div className="row">
            <footer className="footer mt-auto py-3 col-md-12" id="sticky-footer">
            <span class="footer-text"><a href="mailto:davidnjaffe@gmail.com">davidnjaffe@gmail.com</a> | <a href="https://www.linkedin.com/in/davidnjaffe/" target="blank">LinkedIn</a> | <a href="https://github.com/davidnjaffe" target="blank">GitHub</a></span>
            <br></br>
            <p>©2020 David Jaffe</p>
            
              
            
          </footer>
          </div>
            
          
        );
      }
}