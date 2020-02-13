import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {  
    return (
        <footer class="page-footer #212121 grey darken-4">
          <div class="footer-copyright container">
              Copyright © 2017-2020 Montclair Care Share a NJ Non-Profit Corporation.
              <ul class="et-social-icons">
                <li class="et-social-icon"> 
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/montclaircareshare/" class="icon" title="Instagram"> 
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="et-social-icon et-social-facebook"> 
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/montclaircareshare/" class="icon"> 
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="et-social-icon et-social-twitter"> 
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/MontclairCare" class="icon">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
        </footer>
    )
  }
}
export default Footer;

      