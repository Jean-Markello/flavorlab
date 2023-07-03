import Navbar2 from "./Navbar2";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const text = "Ce site web permet à un usager de faire une réservation afin de suivre un cours de cuisine. L’usager aura l’options de venir en personne et cuisiner avec des professionnels ou que quelqu’un vienne chez eux pour leur montrer à cuisinier. Le but est donc de permettre à n’importe l’opportunité d’apprendre à cuisiner des mets qu’ils soient à la maison ou non. Dummy text: In a sizzling pan, the onions danced to a caramelized symphony, releasing their sweet aroma into the air."

const About = () => {
  return (
    <>
      <div className="about">
        <Navbar2 />
        <Row>
          <Col></Col>
          <Col>
            <Card body style={{ width: "35rem", textAlign: "center", backgroundColor: "rgba(6, 86, 143, 0.8)", marginTop: "2%", lineHeight: '3.6', color: "rgba(176, 176, 176, 0.94)"}}>{text}</Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
};

export default About;
