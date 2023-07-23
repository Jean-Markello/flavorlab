import Navbar2 from "./Navbar2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../Images/One.jpg";
import Image2 from "../Images/home.jpg";
import Image3 from "../Images/online.jpg";
import { useTranslation } from 'react-i18next';




const Services = () => {
  const { t } = useTranslation();

  const services = [
    [t('serv_one.title'), t('serv_one.price'), t('serv_one.description'), t('serv_one.sub_title'), Image1],
    [t('serv_two.title'),  t('serv_two.price'), t('serv_two.description'),  t('serv_two.sub_title'), Image2],
    [t('serv_three.title'),  t('serv_three.price') , t('serv_three.description'),  t('serv_three.sub_title'), Image3]
]


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
            {t('serv_title')}
          </div>
        
        <Row className="align-items-start">
          {services.map((service) => (
            <Col xs="4" style={{ marginTop: "5%", marginBottom: "4.9%"}}>
              <Card style={{ width: "20rem", marginLeft: "16%"}}>
                <Card.Img variant="top" src={service[4]} />
                <Card.Body>
                  <Card.Title style={{textAlign: "center"}}>{service[0]} </Card.Title>
                  <Card.Text style={{textAlign: "center"}}><b>{service[3]}</b></Card.Text>
                  <Card.Text style={{textAlign: "center"}}>
                    {service[2]}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "center", color: 'orange' }}><h5>{service[1]}</h5></Card.Text>
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
