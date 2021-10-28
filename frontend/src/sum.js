import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';

class Information extends Component {
    constructor(props){
        super(props)
          this.state = {
            display : "none",
            sum : ""
          }
    }

    render() {
      return (
        <h1 style = {{display:this.state.display}}>{this.state.sums}</h1>
      );
    }
  }
  export default Information;