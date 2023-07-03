import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../Images/las.jpg";
import image2 from "../Images/beef.jpeg";
import image3 from "../Images/chicken.jpg";
import image4 from "../Images/fish.jpg";

import Rating from '@mui/material/Rating';

const Meals = () => {
  const price = ["$5 or less", "$5-$10", "$10-20", "$20-50", "$50-100"];
  const category = [
    "Beverages",
    "Meat & Poultry",
    "Seafood",
    "Vegetables & Salads",
    "Grains",
    "Smoothie",
  ];
  const type = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Special occasion Meals",
  ];

  const images = [image1, image2, image3, image4];
  const mealName= ["Lasagna", "Beef", "Chicken", "Fish"]
  return (
    <>
      <div className="meals">
        <Navbar2 />
        <div style={{ width: "98%" }}>
          <Row>
            <Col
              xs={3}
              style={{ marginTop: "10%", marginRight: "5%", marginLeft: "2%" }}
            >
              <div>
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                    <div style={{ textAlign: "center" }}>FILTER</div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" active>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {price.map((type) => (
                              <div key={"checkbox"} className="mb-3">
                                <Form.Check
                                  type={"checkbox"}
                                  id={`check-api-${"checkbox"}`}
                                >
                                  <Form.Check.Input type={"checkbox"} isValid />
                                  <Form.Check.Label>{type}</Form.Check.Label>
                                  <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                </Form.Check>
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" active>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {category.map((type) => (
                              <div key={"checkbox"} className="mb-3">
                                <Form.Check
                                  type={"checkbox"}
                                  id={`check-api-${"checkbox"}`}
                                >
                                  <Form.Check.Input type={"checkbox"} isValid />
                                  <Form.Check.Label>{type}</Form.Check.Label>
                                  <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                </Form.Check>
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" active>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Type of meals</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {type.map((type) => (
                              <div key={"checkbox"} className="mb-3">
                                <Form.Check
                                  type={"checkbox"}
                                  id={`check-api-${"checkbox"}`}
                                >
                                  <Form.Check.Input type={"checkbox"} isValid />
                                  <Form.Check.Label>{type}</Form.Check.Label>
                                  <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                </Form.Check>
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: "center", marginBottom: "4%", color: "rgba(178, 175, 175, 1)", fontSize: "25px"  }}>Easy Meals</div>
              <Row>
                <Col style={{marginTop: "2%"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" height={250}  src={image1}/>
                    <Card.Body>
                      <Card.Title>{mealName[0]} <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readOnly /></Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">See More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{marginTop: "2%"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" height={250} src={image2} />
                    <Card.Body>
                      <Card.Title>{mealName[1]} <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">See More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col style={{marginTop: "2%"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" height={250}  src={image3}/>
                    <Card.Body>
                      <Card.Title>{mealName[2]} <Rating name="half-rating-read" defaultValue={3.8} precision={0.5} readOnly /></Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">See More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{marginTop: "2%"}}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" height={250}  src={image4} />
                    <Card.Body>
                      <Card.Title>{mealName[3]} <Rating name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly /></Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">See More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Meals;
