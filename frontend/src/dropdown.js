import React, {useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Col, Row } from 'react-bootstrap';

function Dropdowns() {
    const [comp, setComp] = useState ([]);
    const [loan, setLoan] = useState ([' -- Loan tenure (in years): -- '])

    useEffect(function () {
        axios.get("/loanInfo")
            .then((response) => setComp(response.data.company))
            //.then((response) => console.log(response.data.company));
    }, [])

    return (
            <Row>
                <Col sm = {2}>
                    <label style = {{float:"left"}}>Years: </label>
                </Col>
                <Col>
                    <DropdownButton id="dropdown-basic-button" title={loan} style = {{float:"left"}}> 
                        <Dropdown.Item onClick={() => setLoan(10)}>10</Dropdown.Item>
                        <Dropdown.Item onClick={() => setLoan(15)}>15</Dropdown.Item>
                        <Dropdown.Item onClick={() => setLoan(20)}>20</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
    );
}

export default Dropdowns;