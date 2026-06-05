import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";

function SignupScreen() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [error, setError] = useState("")

  const submitHandler=(e)=>{
    e.preventDefault(
      console.log(fname, lname, email, pass1, pass2)
    )
  }

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header
                as="h3"
                className="text-center bg-primary text-light"
              >
                Signup
              </Card.Header>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>
                      <span>
                        <i className="fa fa-user"></i>
                      </span>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      required
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>
                      <span>
                        <i className="fa fa-user"></i>
                      </span>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      required
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                      <span>
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="pass1">
                    <Form.Label>
                      <span>
                        <i className=""></i>
                      </span>
                      Password
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Checkbox />{" "}
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                        id="pass1"
                        value={pass1}
                        onChange={(e) => setPass1(e.target.value)}
                      />
                    </InputGroup>

                    <small>
                      Password must include atleast [1-9][a-z][A-Z][_$@*!.] & 5
                      characters
                    </small>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pass2">
                    <Form.Label>
                      <span>
                        <i className=""></i>
                      </span>
                      Re-Type Password
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Checkbox />{" "}
                      <Form.Control
                        type="password"
                        placeholder="Re-type your password"
                        required
                        id="pass2"
                        value={pass2}
                        onChange={(e) => setPass2(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="d-grid gap-2 mb-2">
                    <Button className="btn btn-primary" type="submit">
                      Sign up
                    </Button>
                  </div>
                </Form>
                <Row className="">
                  <Col>
                    Already User?
                    <Link to="/signin"> Sign in</Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupScreen;
