import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Here you will later dispatch login action
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}></Col>

        <Col md={4}>
          <Card>
            <Card.Header
              as="h3"
              className="text-center bg-primary text-light"
            >
              Signin
            </Card.Header>

            <Card.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <i className="fa-solid fa-envelope"></i> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>
                    <i className="fa fa-lock"></i> Password
                  </Form.Label>

                  <InputGroup className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2 mb-2">
                  <Button className="btn btn-primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>

              <Row>
                <Col>
                  New User? <Link to="/signup">Create an account</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

export default SigninScreen;