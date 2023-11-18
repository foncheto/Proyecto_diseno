import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function PageNotFound() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>404 - Not Found</Card.Title>
              <Card.Text>No existe la pagina que buscas</Card.Text>
              <Button href="/" variant="primary">
                Regresar al inicio
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
