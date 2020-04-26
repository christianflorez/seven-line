import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as S from "./styles";

function SubscribeForm({ subscribe }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    console.log("name", name);
    console.log("email", email);
  }

  return (
    <S.SubscribeContainer>
      <h4>Signup for our Email List</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitted}>
          Submit
        </Button>
      </Form>
    </S.SubscribeContainer>
  );
}
export default SubscribeForm;
