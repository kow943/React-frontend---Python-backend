import 'bootstrap/dist/css/bootstrap.css';
import RangeSlider from 'react-bootstrap-range-slider';
import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

function SimpleSlider() {
    const [ value, setValue ] = useState(0); 

    return ( 
            <Form.Group as={Row} className = "mt-3">
                <Col sm ={2}>
                    <label style = {{float:"left"}}>Interest rate: </label>
                </Col>
                <Col sm = {3}>
                    <RangeSlider
                        value={value}
                        onChange={changeEvent => setValue(changeEvent.target.value)}
                        min = {0}
                        max = {5}
                        step = {0.1}
                        style = {{float:"left"}}
                    />
                </Col>
            </Form.Group>
    );
}

export default SimpleSlider;