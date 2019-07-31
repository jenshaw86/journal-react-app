import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = props => {
  return (
    <form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
