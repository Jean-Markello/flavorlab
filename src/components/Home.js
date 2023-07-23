import Navbar2 from "./Navbar2";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactHtmlParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();


  const adresse = "456 Maple Avenue Vancouver";
  const phone = "(604) 555-1234";
  const email = "contact@tastydishescooking.com";

  return (
    <>
      <div className="home">
        <Navbar2 />
        <div style={{ width: "100%" }}>
          <div className="textColorTitle">{t('home_title')}</div>
          <div className="textColor">{t('home_sub_title')}</div>
        </div>
        <Card style={{marginTop: "10%", backgroundColor: "rgb(187, 184, 180)", width: "98%", marginLeft: "1%", border: "2px solid green"}}>
          <Card.Body style={{ textAlign: "center" }}>
            <Row>
                <Col><b>{t('address')}: </b>{adresse}</Col>
                <Col><b>{t('phone')}: </b>{phone}</Col>
                <Col><b>{t('email')}: </b>{email}</Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
