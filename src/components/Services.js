import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../Images/One.jpg";
import Image2 from "../Images/home.jpg";
import Image3 from "../Images/kitchen.jpeg";

const services = [
    ["One Session", "$50", "2h", "Experience the joy of cooking with our 2-hour interactive sessions for just $50. Learn from expert chefs, unleash your culinary creativity, and master gourmet techniques in a personalized and affordable culinary education.", "less popular", Image1],
    ["In-Person Cooking", "$400", "5 month", "Embark on a culinary adventure with our in-person cooking program. Over 5 months, master the art of cooking alongside experienced chefs, explore diverse cuisines, and elevate your skills for $400. Unleash your inner chef in a hands-on, immersive journey.", "Popular choice", Image2],
    ["Online Cooking", "$200", "2 month", "Join our online cooking program and discover a world of culinary delights from the comfort of your own kitchen. Over 2 months, learn from top-notch chefs, unravel cooking techniques, and create delicious dishes for just $200. Enhance your culinary skills with convenience and affordability.", "Most like choice", Image3]
]

const Services = () => {
  return (
    <>
      <div className="services">
        <Navbar2 />
        <div style={{ width: "98%"}} >
          <div 
            style={{
              textAlign: "center",
              marginTop: "2%",
              color: "rgba(178, 175, 175, 1)",
              fontSize: "25px",
            }}
          >
            {" "}
            List of Services
          </div>
        
        <Row>
          {services.map((service) => (
            <Col style={{ marginTop: "5%", marginBottom: "2%", marginLeft: "2%"}}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={service[5]} />
                <Card.Body>
                  <Card.Title style={{textAlign: "center"}}>{service[0]} </Card.Title>
                  <Card.Text style={{textAlign: "center"}}><b>{service[4]}</b></Card.Text>
                  <Card.Text style={{textAlign: "center"}}>
                    {service[3]}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "center", color: 'orange' }}><h5>{service[1]} for {service[2]}</h5></Card.Text>
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

export default Services;
