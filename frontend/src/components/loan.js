import 'bootstrap/dist/css/bootstrap.css';
import SimpleSlider from "./slider";
import Dropdowns from "./dropdown";
import { Col, Row, Form } from 'react-bootstrap';

function LoanAmount() {

    return (
        <Form >
            <Form.Group className = "mt-3">
                <Row>
                    <Col sm ={2}>
                        <label style = {{float:"left"}}>Loan Amount: </label>
                    </Col>
                    <Col>
                        <input type="text" style = {{float:"left"}}/>
                    </Col>
                </Row>
            </Form.Group>
            <SimpleSlider />
            <Form.Group className = "mt-3">
              <Dropdowns />
            </Form.Group>
            <input className = "mt-3" type="submit" value="Submit" style = {{float:"left"}}/>
        </Form>
    );
}

export default LoanAmount;