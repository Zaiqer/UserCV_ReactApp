import React, { Component } from "react";
import "./Contacts.css";

class Contacts extends Component {
  render() {
    return (
      <div className="contact">
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          <p>Email: danielmoore@gmail.com</p>
        </div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <p>Phone Number: +994101111111</p>
        </div>
      </div>
    );
  }
}

export default Contacts;
