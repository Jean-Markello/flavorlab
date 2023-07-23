import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import image1 from "../Images/las.jpg";
import image2 from "../Images/beef.jpeg";
import image3 from "../Images/chicken.jpg";
import image4 from "../Images/fish.jpg";
import image5 from "../Images/stir.jpg";
import image6 from "../Images/spagetti.jpg";
import image7 from "../Images/friedRice.jpeg";
import image8 from "../Images/tacos.jpg";
import image9 from "../Images/omelette.jpg";
import image10 from "../Images/pancakes.jpg";
import image11 from "../Images/stir-fry.jpg";
import image12 from "../Images/avacado.jpg";
import image13 from "../Images/caprese.jpg";
import image14 from "../Images/quinoa.jpg";
import image15 from "../Images/Berry.jpg";
import image16 from "../Images/fraiche.jpg";
import image17 from "../Images/brown.jpg";
import Rating from "@mui/material/Rating";

const Meals = () => {
  const price = ["1-5", "5-10", "10-20", "20-50", "50-100"];
  const type = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Special occasion Meals",
  ];

  useEffect(() => {
    setFilteredMeals(meals);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedMealIngredients, setSelectedMealIngredients] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [upperBound, setSelectedUpper] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);

  const handleShowModal = (ingredients) => {
    setSelectedMealIngredients(ingredients);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const meals = [
    [
      "Lasagna",
      4.2,
      23,
      "Lunch",
      [
        ["Lasagna noodles"],
        ["Ground beef"],
        ["Tomato sauce"],
        ["Ricotta cheese"],
        ["Mozzarella cheese"],
        ["Parmesan cheese"],
        ["Onion"],
        ["Garlic"],
        ["Olive oil"],
        ["Salt"],
        ["Pepper"],
        ["Dried oregano"],
        ["Dried basil"],
      ],
      image1,
    ],
    [
      "Beef Stir-Fry",
      4.5,
      10,
      "Dinner",
      [
        ["Beef strips or slices"],
        ["Soy sauce"],
        ["Sesame oil"],
        ["Ginger"],
        ["Garlic"],
        ["Bell peppers (different colors)"],
        ["Broccoli florets"],
        ["Carrots"],
        ["Onion"],
        ["Vegetable oil"],
        ["Salt"],
        ["Pepper"],
        ["Cornstarch (optional, for thickening the sauce)"],
      ],
      image2,
    ],
    [
      "Chicken Stir-Fry",
      5,
      56,
      "Dinner",
      [
        ["Chicken breast (sliced)"],
        ["Soy sauce"],
        ["Hoisin sauce"],
        ["Garlic"],
        ["Ginger"],
        ["Broccoli florets"],
        ["Snap peas"],
        ["Carrots"],
        ["Bell peppers (different colors)"],
        ["Onion"],
        ["Vegetable oil"],
        ["Salt"],
        ["Pepper"],
      ],
      image3,
    ],
    [
      "Fish",
      3.8,
      21.22,
      "Dinner",
      [
        ["Fish fillets (salmon, tilapia, etc.)"],
        ["Lemon or lime juice"],
        ["Olive oil"],
        ["Garlic"],
        ["Paprika"],
        ["Salt"],
        ["Pepper"],
      ],
      image4,
    ],
    [
      "Chicken Stir-Fry",
      4.2,
      44.14,
      "Special occasion Meals",
      [
        ["Chicken breast (sliced)"],
        ["Soy sauce"],
        ["Hoisin sauce"],
        ["Garlic"],
        ["Ginger"],
        ["Broccoli florets"],
        ["Snap peas"],
        ["Carrots"],
        ["Bell peppers (different colors)"],
        ["Onion"],
        ["Vegetable oil"],
        ["Salt"],
        ["Pepper"],
      ],
      image5,
    ],
    [
      "Spaghetti",
      5,
      17.77,
      "Lunch",
      [
        ["Spaghetti noodles"],
        ["Tomato sauce"],
        ["Ground beef"],
        ["Onion"],
        ["Garlic"],
        ["Olive oil"],
        ["Dried oregano"],
        ["Dried basil"],
        ["Salt"],
        ["Pepper"],
        ["Parmesan cheese (optional, for topping)"],
      ],
      image6,
    ],
    [
      "Egg Fried Rice",
      5,
      31.33,
      "Special occasion Meals",
      [
        ["Cooked rice"],
        ["Eggs"],
        ["Soy sauce"],
        ["Sesame oil"],
        ["Green onions (scallions)"],
        ["Carrots (diced)"],
        ["Peas"],
        ["Garlic"],
        ["Ginger"],
        ["Vegetable oil"],
      ],
      image7,
    ],
    [
      "Tacos",
      4.8,
      6.99,
      "Snacks",
      [
        ["Tortillas (corn or flour)"],
        ["Ground beef"],
        ["Taco seasoning mix"],
        ["Lettuce"],
        ["Tomatoes"],
        ["Cheese (cheddar or Mexican blend)"],
        ["Salsa"],
        ["Sour cream"],
        ["Guacamole (optional)"],
      ],
      image8,
    ],
    [
      "Omelette",
      5,
      12.44,
      "Breakfast",
      [
        ["Eggs"],
        ["Milk or cream"],
        ["Salt"],
        ["Pepper"],
        ["Cheese (cheddar, feta, or your favorite)"],
        ["Bell peppers"],
        ["Onion"],
        ["Tomatoes"],
        ["Spinach or mushrooms (optional)"],
      ],
      image9,
    ],
    [
      "Pancakes",
      4.5,
      7,
      "Breakfast",
      [
        ["All-purpose flour"],
        ["Baking powder"],
        ["Salt"],
        ["Milk"],
        ["Eggs"],
        ["Butter"],
        ["Sugar (optional, for sweet pancakes)"],
        ["Maple syrup (for serving)"],
      ],
      image10,
    ],
    [
      "Vegetable Stir-Fry",
      4.6,
      16,
      "Snacks",
      [
        ["Broccoli florets"],
        ["Snap peas"],
        ["Carrots"],
        ["Bell peppers (different colors)"],
        ["Onion"],
        ["Garlic"],
        ["Ginger"],
        ["Soy sauce"],
        ["Sesame oil"],
        ["Vegetable oil"],
        ["Salt"],
        ["Pepper"],
      ],
      image11,
    ],
    [
      "Avocado Toast",
      4.4,
      4,
      "Snacks",
      [
        ["Bread (whole-grain)"],
        ["Avocado"],
        ["Lemon juice"],
        ["Salt"],
        ["Pepper"],
        ["Red pepper flakes (optional, for some heat)"],
        ["Olive oil"],
        ["Fresh herbs (cilantro, parsley, or basil - optional)"],
        ["Poached or fried eggs (optional, for added protein)"],
      ],
      image12,
    ],
    [
      "Caprese Salad",
      5,
      2,
      "Snacks",
      [
        ["Fresh tomatoes"],
        ["Fresh mozzarella cheese"],
        ["Fresh basil leaves"],
        ["Balsamic vinegar"],
        ["Olive oil"],
        ["Salt"],
        ["Pepper"],
      ],
      image13,
    ],
    [
      "Quinoa Salad",
      5,
      22.99,
      "Snacks",
      [
        ["Quinoa"],
        ["Cucumber"],
        ["Cherry tomatoes"],
        ["Red onion"],
        ["Bell peppers (different colors)"],
        ["Kalamata olives (optional)"],
        ["Feta cheese (optional)"],
        ["Fresh parsley or cilantro"],
        ["Lemon juice"],
        ["Olive oil"],
        ["Salt"],
        ["Pepper"],
      ],
      image14,
    ],
    [
      "Berry Blast Smoothie",
      4.2,
      12,
      "Breakfast",
      [
        ["Mixed berries"],
        ["Banana"],
        ["Greek yogurt"],
        ["Milk or fruit juice"],
        ["Honey (optional, for added sweetness)"],
        ["Ice cubes"],
      ],
      image15,
    ],
    [
      "Green Tropical Smoothie",
      4,
      8,
      "Breakfast",
      [
        ["Spinach or kale"],
        ["Pineapple"],
        ["Mango"],
        ["Banana"],
        ["Coconut water or coconut milk"],
        ["Greek yogurt (optional, for creaminess)"],
        ["Honey (optional, for added sweetness)"],
        ["Ice cubes"],
      ],
      image16,
    ],
    [
      "Brown Rice",
      3.6,
      34,
      "Dinner",
      [["Brown rice"], ["Water or broth"], ["Oil"], ["Lemon"]],
      image17,
    ],
  ];

  const handlePriceChange = (price) => {
    const [lowerBound, upperBound] = price.split("-").map(parseFloat);
    setSelectedPrice((prevPrice) => {
      if (prevPrice === price) {
        // Uncheck if already selected
        filterMeals(selectedType, "", "");
        return "";
      } else {
        filterMeals(selectedType, lowerBound, upperBound);
        // Otherwise, set the selected price
        return price;
      }
    });
    setSelectedUpper((prevUpper) => {
      if (prevUpper === upperBound) {
        return "";
      } else {
        return upperBound;
      }
    });
  };

  const filterMeals = (mealType, lowerBound, upperBound) => {
    // Check if both filters are unchecked
    if (!mealType && !lowerBound && upperBound) {
      // Display all meals as they were when the page was first loaded
      setFilteredMeals(meals);
      return;
    }
    console.log(mealType, lowerBound, upperBound);

    // Filter meals based on selected criteria
    let filteredMeals = meals.filter((meal) => {
      const mealPrice = parseFloat(meal[2]);
      return (
        (!mealType || meal[3] === mealType) &&
        (!lowerBound || mealPrice >= lowerBound) &&
        (!upperBound || mealPrice <= upperBound)
      );
    });

    setFilteredMeals(filteredMeals);
  };

  const handleTypeChange = (type) => {
    setSelectedType((prevType) => {
      if (prevType === type) {
        // Uncheck if already selected
        filterMeals("", parseFloat(selectedPrice), parseFloat(upperBound));
        return "";
      } else {
        // Otherwise, set the selected type
        filterMeals(type, parseFloat(selectedPrice), parseFloat(upperBound));
        return type;
      }
    });
  };

  return (
    <>
      <div className="meals">
        <Navbar2 />
        <div style={{ width: "98%" }}>
          <Row>
            <Col>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "2%",
                  color: "rgba(178, 175, 175, 1)",
                  fontSize: "25px",
                }}
              >
                Easy Meals To Cook
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={4}
              style={{ marginTop: "4%", marginBottom: "1%", marginRight: "5%", marginLeft: "33%" }}
            >
              <div style={{ textAlign: "center" }}>
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                    <div style={{ textAlign: "center" }}>FILTER</div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    active
                    style={{ backgroundColor: "orange" }}
                  >
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {price.map((price) => (
                              <div key={price} className="mb-3">
                                <Form.Check
                                  type="checkbox"
                                  id={`check-api-${price}`}
                                  label={"$ " + price}
                                  checked={selectedPrice === price}
                                  onChange={() => handlePriceChange(price)}
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    active
                    style={{ backgroundColor: "orange" }}
                  >
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Type of meals</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {type.map((mealType) => (
                              <div key={mealType} className="mb-3">
                                <Form.Check
                                  type="checkbox"
                                  id={`check-api-${mealType}`}
                                  label={mealType}
                                  checked={selectedType === mealType}
                                  onChange={() => handleTypeChange(mealType)}
                                />
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
          </Row>
          <Row>
            <Col>
              {filteredMeals.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    color: "red",
                    marginTop: "2%",
                  }}
                >
                  No meals found matching the filter criteria.
                </div>
              ) : (
                <Row>
                  {filteredMeals.map((meal, index) => (
                    <Col
                      key={index}
                      style={{ marginTop: "3%", marginLeft: "4%" }}
                    >
                      <Card style={{ width: "20rem", textAlign: "center" }}>
                        <Card.Img variant="top" height={250} src={meal[5]} />
                        <Card.Body>
                          <Card.Title
                            style={{ textAlign: "center", marginBottom: "5%" }}
                          >
                            {meal[0]}
                            {" - $"}
                            {meal[2]}
                            <div>
                              <Rating
                                name="half-rating-read"
                                defaultValue={meal[1]}
                                precision={0.2}
                                readOnly
                              />
                            </div>
                          </Card.Title>
                          <Card.Text>
                            <ListGroup>
                              {meal[4].slice(0, 3).map((ingredient, index) => (
                                <ListGroup.Item key={index}>
                                  {ingredient[0]}
                                </ListGroup.Item>
                              ))}
                              {meal[4].length > 3 && (
                                <Button
                                  variant="link"
                                  style={{
                                    marginTop: "6%",
                                    fontSize: "18px",
                                    border: "2.5px solid blue",
                                  }}
                                  onClick={() => handleShowModal(meal[4])}
                                >
                                  <b>See More</b>
                                </Button>
                              )}
                            </ListGroup>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Ingredients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    {selectedMealIngredients.map((ingredient, index) => (
                      <ListGroup.Item key={index}>
                        {ingredient[0]}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Meals;
