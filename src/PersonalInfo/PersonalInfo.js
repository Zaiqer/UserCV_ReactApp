import React, { Component } from "react";
import photo from "../photo.jpg";
import "./PersonalInfo.css";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="info">
        <div className="photo">
          <img src={photo} className="img" alt="profile-photo" />
        </div>
        <h2 className="name">Daniel Moore</h2>
        <p className="age">Age: 25</p>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Baku, Azerbaijan</p>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
