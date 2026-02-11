import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
const App = () => {
  const [validated, set_Validated] = useState(false);
  const [form_Data, set_Form_Data] = useState({
    user: "",
    pass: "",
    confimPass: "",
    email: "",
    phoneNo: "",
  });
  const submitFn = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    set_Validated(true);
  };
  const chngFn = (event) => {
    const { name, value } = event.target;
    set_Form_Data({
      ...form_Data,
      [name]: value,
    });
  };
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Row>
          <Col
            md={{
              span: 6,
              offset: 3,
            }}
          >
            <h1
              style={{
                color: "green",
              }}
            >
              Test Program
            </h1>
            <h3>Register Page</h3>
            <Form noValidate validated={validated} onSubmit={submitFn}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="user"
                  value={form_Data.user}
                  onChange={chngFn}
                  pattern="^[a-zA-Z0-9]+$"
                  required
                  isInvalid={
                    validated && !/^[a-zA-Z0-9]+$/.test(form_Data.user)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid username (alphanumeric characters only).
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="pass"
                  value={form_Data.pass}
                  onChange={chngFn}
                  minLength={6}
                  required
                  isInvalid={validated && form_Data.pass.length < 6}
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 6 characters long.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confimPass"
                  value={form_Data.confimPass}
                  onChange={chngFn}
                  minLength={6}
                  required
                  pattern={form_Data.pass}
                  isInvalid={
                    validated && form_Data.confimPass !== form_Data.pass
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Passwords do not match.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form_Data.email}
                  onChange={chngFn}
                  required
                  isInvalid={
                    validated && !/^\S+@\S+\.\S+$/.test(form_Data.email)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNo"
                  value={form_Data.phoneNo}
                  onChange={chngFn}
                  pattern="^\d{10}$"
                  required
                  isInvalid={validated && !/^\d{10}$/.test(form_Data.phoneNo)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid 10-digit phone number.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
