import React, {Component} from 'react';
import './App.css';
import Welcome from "./form";
import Information from './sum';
import { Container, Col, Row } from 'react-bootstrap';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

class App extends Component {
  
  render() {
    const data = [
      {name: 'Loan amount', students: 4000},
      {name: 'Interest', students: 700}
    ];

    const colors = ['IndianRed', 'Purple'];
    return (
      <div className="App">
        <Container style = {{backgroundColor: "#E8E8E8"}}>
          <Col>
            <Row>
              <h1>Loan Payment Calculator</h1>
            </Row>
            <Welcome />
          </Col>
          <Col>
            <PieChart width={500} height={400}>
              <Pie data={data} dataKey="students" outerRadius={100}>
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                  ))
                }
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </Col>
        </Container>
      </div>
    );
  }
}
export default App;
