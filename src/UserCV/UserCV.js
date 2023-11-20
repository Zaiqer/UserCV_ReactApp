import React, { Component } from "react";
import "../styles.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Contacts from "../Contacts/Contatcs";
import Experience from "../Experience/Experience";

class UserCV extends Component {
  render() {
    return (
      <div className="container">
        <PersonalInfo />
        <Contacts />
        <Experience />
      </div>
    );
  }
}
export default UserCV;
