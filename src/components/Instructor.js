import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Chef1 from "../Images/chef1.png";
import Chef2 from "../Images/chef2.png";
import Chef3 from "../Images/chef3.png";
import Chef4 from "../Images/chef4.png";
import Chef5 from "../Images/chef5.png";
import Chef6 from "../Images/chef6.png";
import Chef7 from "../Images/chef7.png";
import Chef8 from "../Images/chef8.png";
import Chef9 from "../Images/chef9.png";

const Instructors = () => {
  const instructors = [
    ["Mark Pollo", 4.5, Chef1],
    ["Emily Turner", 3.5, Chef3],
    ["Benjamin Harris", 5, Chef2],
    ["Ava Thompson", 4, Chef7],
    ["Samuel Ramirez", 4.5, Chef6],
    ["Charlotte Patel", 3, Chef4],
    ["Henry Mitchell", 3.5, Chef8],
    ["Olivia Reynolds", 4.8, Chef5],
    ["Lisa Campbell", 5, Chef9],
  ];

  return (
    <>
      <div className="instructor">
        <Navbar2 />
        <div style={{ width: "98%" }}>
          <div style={{ textAlign: "center", marginTop: "2%", color: "rgba(178, 175, 175, 1)", fontSize: "25px" }}>
            List of Instructors
          </div>
          <Row style={{ marginLeft: "2%" }}>
            {instructors.map((instructor) => (
              <Col style={{ marginTop: "5%" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={instructor[2]} />
                  <Card.Body>
                    <Card.Title>{instructor[0]} </Card.Title>
                    <Rating
                      name="half-rating-read"
                      defaultValue={instructor[1]}
                      precision={0.5}
                      readOnly
                    />
                    <Card.Text>
                      I'm Chef Cook {instructor[0]}, a seasoned culinary artist
                      with a passion for creating unforgettable dining
                      experiences. Bon appétit!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Instructors;
