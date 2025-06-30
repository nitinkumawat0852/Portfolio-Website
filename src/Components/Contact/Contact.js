import React from "react";
import arrow from "../../Assets/about.svg";
import mailicon from "../../Assets/mailicon.svg";
import locationicon from "../../Assets/location icon.svg";
import callicon from "../../Assets/callicon.svg";
import "./Contact.css";
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={arrow} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailicon} />
              <p>Nitinkumawat0852@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callicon} />
              <p>+91-7878776121</p>
            </div>
            <div className="contact-detail">
              <img src={locationicon} />
              <p>Shastri Nagar , Jaipur (Raj)</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" />
            <button className="contact-submit" >Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
