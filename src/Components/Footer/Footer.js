import React from "react";
import logo from "../../Assets/Nitin.png";
import usericon from "../../Assets/usericon.svg";
import './Footer.css'

function Footer() {
  return (
    <div  id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} />
          <p>
          I’m a fresher Frontend Developer from India, looking for an internship to apply my skills in HTML, CSS, JavaScript, and React.js.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={usericon} />
            <input text="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Nitin Kumawat. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
