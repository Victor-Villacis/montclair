import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {  
    return (
        <footer className="page-footer #212121 grey darken-4">
          <div className="footer-copyright container">
              Copyright © 2017-2020 Montclair Care Share a NJ Non-Profit Corporation.
              <ul className="et-social-icons">
                <li className="et-social-icon"> 
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/montclaircareshare/" className="icon" title="Instagram"> 
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="et-social-icon et-social-facebook"> 
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/montclaircareshare/" className="icon"> 
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="et-social-icon et-social-twitter"> 
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/MontclairCare" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
        </footer>
    )
  }
}
export default Footer;

      