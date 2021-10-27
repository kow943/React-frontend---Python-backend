import React, { Component } from "react";
import { Dropdown, DropdownButton, Col, Row, Form } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

class Welcome extends Component {
  constructor(props){
    super(props)
      this.state = {
        amount : "",
        interest : 0,
        years : " -- Select loan year -- "
      }
  }

  handleAmount = (event) => {
    this.setState({
      amount: event.target.value
    })
  }

  handleInterest = (event) => {
    this.setState({
      interest: event.target.value
    })
  }

  handleYears = (event) => {
    this.setState({
      years: event.target.title
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:5000/info', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

    render() {
      return (
        <Form onSubmit = {this.handleSubmit}>
          <Form.Group className = "mt-3">
            <Row>
              <Col sm ={2}>
                  <label style = {{float:"left"}}>Loan Amount: </label>
              </Col>
              <Col>
                  <input type="text"
                    value = {this.state.amount} 
                    onChange = {this.handleAmount}
                    style = {{float:"left"}}/>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className = "mt-3">
            <Row>
              <Col sm ={2}>
                <label style = {{float:"left"}}>Interest rate: </label>
              </Col>
                <Col sm = {3}>
                  <RangeSlider
                      value={this.state.interest}
                      onChange={this.handleInterest}
                      min = {0}
                      max = {5}
                      step = {0.1}
                      style = {{float:"left"}}
                  />
                </Col>
            </Row>
          </Form.Group>
          <Form.Group className = "mt-3">
            <Row>
              <Col sm = {2}>
                  <label style = {{float:"left"}}>Years: </label>
              </Col>
              <Col>
                  <DropdownButton id="dropdown-basic-button" 
                    title = {this.state.years} 
                    style = {{float:"left"}}> 
                      <Dropdown.Item title = "10" onClick = {this.handleYears}>10</Dropdown.Item>
                      <Dropdown.Item title = "15" onClick = {this.handleYears}>15</Dropdown.Item>
                      <Dropdown.Item title = "20" onClick = {this.handleYears}>20</Dropdown.Item>
                  </DropdownButton>
              </Col>
            </Row>
          </Form.Group>
          <input className = "mt-3" type="submit" value="Submit" style = {{float:"left"}}/>
        </Form>
      );
    }
}

export default Welcome;