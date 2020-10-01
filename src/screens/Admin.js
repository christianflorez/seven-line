import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { setCount } from "utils/api";
import * as S from "./styles";

function Admin() {
  const [accumulationCount, setAccumulationCount] = React.useState();
  const [isSuccessful, setIsSuccessful] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState();

  function handleSubmit(e) {
    setIsSuccessful(false);

    try {
      e.preventDefault();
      setCount(Number(accumulationCount));
      setIsSuccessful(true);
    } catch (err) {
      setIsSuccessful(false);
      setErrorMessage(JSON.stringify(err));
    }
  }

  return (
    <>
      <Container>
        <S.MainHeader>Admin</S.MainHeader>
        <S.CenterContainer>
          <Form>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Accumulation Count</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter current amount"
                onChange={(e) => setAccumulationCount(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          {isSuccessful && (
            <Alert variant="success">
              Accumulation count has been successfully updated.
            </Alert>
          )}
          {errorMessage && (
            <Alert variant="danger">
              Accumulation count could not be updated. Error received:
              {errorMessage}
            </Alert>
          )}
        </S.CenterContainer>
      </Container>
    </>
  );
}

export default Admin;
