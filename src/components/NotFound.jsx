import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col md={8} className="text-center">
        <h2>404 - Page Not Found</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
