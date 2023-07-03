import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Booking = () => {
  const requireDetails = ["Full Name", "Address", "Phone Number"];
  const [state, setValue] = useState("");
  const [price, setPrice] = useState("");
  const serviceType = [
    [
      "Service Type",
      ["One Session", "In-person Cooking", "Online Cooking"],
      "state1",
    ],
    [
      "Instructor",
      [
        "Mark Pollo",
        "Emily Turner",
        "Benjamin Harris",
        "Ava Thompson",
        "Samuel Ramirez",
        "Charlotte Patel",
        "Henry Mitchell",
        "Olivia Reynolds",
        "Lisa Campbell",
      ],
      "state2",
    ],
  ];

  const changeValue = (name, value) => {
    if (value === "state1") {
      setValue(name);
    } else {
      setValue(name);
      if (name === "One Session") {
        setPrice("$50 for 2H");
      } else if (name === "In-person Cooking") {
        setPrice("$400 for 5 Month");
      } else {
        setPrice("$200 for 2 Month");
      }
    }
  };

  const handleBookClick = () => {
    alert("Booking confirmed");
  };

  return (
    <>
      <div className="booking">
        <Navbar2 />
        <div style={{ textAlign: "center", width: "98%", marginBottom: "2%" }}>
          <Row>
            <Col></Col>
            <Col>
              <Card
                style={{
                  width: "40rem",
                  textAlign: "center",
                  backgroundColor: "rgba(6, 86, 143, 0.7)",
                }}
              >
                <Card.Body>
                  {requireDetails.map((details) => (
                    <InputGroup
                      className="mb-3"
                      style={{ marginTop: "5%" }}
                      key={details}
                    >
                      <InputGroup.Text id="basic-addon1">
                        {details}
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  ))}
                  {serviceType.map((service) => (
                    <InputGroup
                      className="mb-3"
                      style={{ marginTop: "5%" }}
                      key={service[0]}
                    >
                      <SplitButton
                        variant="outline-secondary"
                        title={service[0]}
                        id="segmented-button-dropdown-1"
                      >
                        {service[1].map((item) => (
                          <Dropdown.Item
                            href="#"
                            onClick={() => changeValue(item, service[3])}
                            key={item}
                          >
                            {item}
                          </Dropdown.Item>
                        ))}
                      </SplitButton>
                      <Form.Control
                        placeholder={state}
                        aria-label="Text input with dropdown button"
                      />
                    </InputGroup>
                  ))}
                  <Card.Text>
                    <h5 style={{ color: "orange" }}>Price: {price}</h5>
                  </Card.Text>
                  <Button style={{ marginTop: "2%" }} onClick={handleBookClick}>
                    Book
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Booking;
