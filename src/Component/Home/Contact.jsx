import React, { useState } from "react";
import "../../Asset/Style/Extra.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section>
      <div className="contactus">
        <h1 className="text-center text-white text-uppercase fw-bold">
          Spot On Flooring pvt ltd
        </h1>
        <h1 className="text-center text-white text-uppercase fw-bold">
          Specialists clients can trust.
        </h1>
      </div>
      <div className="container">
        <div className="row formcon mx-1">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="Email"
                  placeholder="Enter Your Email"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Phone</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">📞</InputGroup.Text>
                  <Form.Control
                    type="Number"
                    placeholder="Enter Your Phone Number"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <div className=" d-flex flex-column">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-100 texting"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <Form.Group className="mb-4 mt-1">
              <Form.Check
                required
                label="Are You Sure you want to sent a Message"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <button className="filter">Submit form</button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
