import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dishes from "../data/menu.json";
import DishComments from "./DishComments";

// DishDetails will load on anything like /details/xxxxxx
// whatever comes after the last / is going to be assigned the name of pastaId,
// because that's how I declared my route argument in App.js
// I can retrieve pastaId in the params object I'm invoking with the useParams() hook

const DishDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);
  // params is ALWAYS going to be an object

  const [pastaToShow, setPastaToShow] = useState(null);
  // pastaToShow will become one of the objects in my json, the one which the id
  // matches with the argument I'm passing into the url (pastaId)

  // great! params.pastaId is the ID of the pasta I need to show the details of :)
  // let's grab the details I need to show using a componentDidMount/useEffect
  useEffect(() => {
    // here I'll try to find the correct object to show the details for in menu.json
    // because the pastaId I can retrieve from the address bar will have a corresponding pasta in the menu
    let rightPasta = dishes.find(
      (dish) => dish.id.toString() === params.pastaId
    );
    // rightPasta is ONE object from the json: the correct pasta matching my id
    // 3 !== '3'
    console.log("rightPasta", rightPasta);
    // fetching data from a remote endpoint will still be done in this useEffect()
    setPastaToShow(rightPasta);
  }, []);

  return (
    <Container>
      <h3>PASTA DETAILS</h3>
      {pastaToShow && (
        <>
          <Row className="justify-content-center my-2">
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src={pastaToShow.image} />
                <Card.Body className="text-center">
                  <Card.Title>{pastaToShow.name}</Card.Title>
                  <div>
                    <div>{pastaToShow.description}</div>
                    <div>
                      <Badge variant="warning">{pastaToShow.label}</Badge>
                    </div>
                    <div>
                      <Badge variant="danger">{pastaToShow.price}$</Badge>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col md={6}>
              <DishComments dish={pastaToShow} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default DishDetails;

// omdbapi.com/search=ironman&category=movies
