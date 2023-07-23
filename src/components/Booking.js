import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";

const Booking = () => {
  const requireDetails = ["Full Name", "Address", "Phone Number"];
  const serviceType = [
    [
      "Service Type",
      ["One Session", "In-person Cooking", "Online Cooking"],
      "state1",
    ],
  ];

  const serviceType2 = [
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

  const serviceAllType = [serviceType, serviceType2];

  const [selectedService, setSelectedService] = useState("Service Type");
  const [selectedInstructor, setSelectedInstructor] = useState("Instructor");
  const [price, setPrice] = useState("");
  
  let servicess = {
    "Instructor": selectedInstructor,
    "Service Type": selectedService
  }

  const handleServiceSelect = (event, type) => {
      const selectedValue = event.target.value;
      type === "Instructor"? setSelectedInstructor(selectedValue): setSelectedService(selectedValue);

      // Calculate and set the price based on the selected service
      if (selectedValue === "One Session") {
        setPrice("$50 for 2H");
      } else if (selectedValue === "In-person Cooking") {
        setPrice("$400 for 5 Month");
      } else if (selectedValue === "Online Cooking") {
        setPrice("$200 for 2 Month");
      }
    
  };

  const handleBookClick = () => {
    alert("Booking confirmed");
  };

  return (
    <>
      <div className="booking">
        <Navbar2 />
        <div style={{ width: "98%", marginBottom: "2%", marginTop: "1%" }}>
          <Row>
            <Col></Col>
            <Col>
              <Card
                style={{
                  width: "40rem",
                  backgroundColor: "rgba(6, 86, 143, 1)",
                }}
              >
                <Card.Body>
                  {requireDetails.map((details) => (
                    <div key={details}>
                      <label style={{ fontSize: "20px" }}>{details}:</label>
                      <Form.Floating className="mb-2">
                        <Form.Control
                          id="floatingInputCustom"
                          type="email"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">
                          {details}
                        </label>
                      </Form.Floating>
                    </div>
                  ))}{" "}
                  {serviceAllType.map((serviceType) => (
                    <>
                      <label  style={{ fontSize: "20px" }}> {serviceType[0][0]} </label>
                      <FloatingLabel controlId="floatingSelectGrid" style={{ marginBottom: "4%" }} className="mb-2">
                        <Form.Select
                          aria-label="Floating label select example"
                          onChange={ (event) => handleServiceSelect(event, serviceType[0][0])}
                          value={servicess[serviceType[0][0]]}
                        >
                          {serviceType.map((service) => (
                            <optgroup>
                              {service[1].map((value) => (
                                <option value={value} key={value}>
                                  {value}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </>
                  ))}
                  <Card.Text style={{textAlign: "center" }}>
                    <h5 style={{ color: "orange" }}>Price: {price}</h5>
                    <Button style={{ marginTop: "2%", backgroundColor: "green", fontSize: "18px"}} onClick={handleBookClick}>
                    Book
                  </Button>
                  </Card.Text>
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
