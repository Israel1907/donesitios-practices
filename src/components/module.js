import React from "react";
import Navbar from "./Navbar";
import "../styles/Navbar.css";

class Module extends React.Component {
  render() {
    return (
      <div _ngcontent-boq-c1="" class="container-fluid">
        <Navbar _ngcontent-boq-c1="" _nghost-boq-c2=""></Navbar>
        <router-outlet _ngcontent-boq-c1=""></router-outlet>
      </div>
    );
  }
}

export default Module;
