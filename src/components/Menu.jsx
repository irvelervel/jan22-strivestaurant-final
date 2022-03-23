import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import dishes from "../data/menu.json";
import { Link } from "react-router-dom";

const Menu = () => (
  <Container>
    {dishes.map((pasta) => (
      <Row key={pasta.id} className="justify-content-center my-2">
        <Col md={6}>
          <Card>
            <Link to={"/details/" + pasta.id}>
              <Card.Img variant="top" src={pasta.image} />
            </Link>
            <Card.Body className="text-center">
              <Card.Title>{pasta.name}</Card.Title>
              <Card.Text>
                <div>{pasta.description}</div>
                <div>
                  <Badge variant="warning">{pasta.label}</Badge>
                </div>
                <div>
                  <Badge variant="danger">{pasta.price}$</Badge>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    ))}
  </Container>
);

export default Menu;
