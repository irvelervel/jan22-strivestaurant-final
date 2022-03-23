import { Container, Row, Col } from "react-bootstrap";
import ReservationForm from "./ReservationForm";
import Reservations from "./Reservations";

const ReservationComponent = () => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col md={8} className="text-center">
        <Reservations />
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col md={8} className="text-center">
        <ReservationForm />
      </Col>
    </Row>
  </Container>
);

export default ReservationComponent;
