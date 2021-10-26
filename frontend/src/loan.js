import 'bootstrap/dist/css/bootstrap.css';
import SimpleSlider from "./slider";
import Dropdowns from "./dropdown";
import { Col, Row, Form } from 'react-bootstrap';

function LoanAmount() {

    return (
        <Form>
            <Row className = "mt-3">
                <Col sm ={2}>
                    <label style = {{float:"left"}}>Loan Amount: </label>
                </Col>
                <Col>
                    <input type="text" style = {{float:"left"}}/>
                </Col>
            </Row>
            <Row className = "mt-3">
                <SimpleSlider />
            </Row>
            <Row className = "mt-3">
              <Dropdowns />
            </Row>
            <input type="submit" value="Submit" style = {{float:"left"}}/>
        </Form>
    );
}

export default LoanAmount;