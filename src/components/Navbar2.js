import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

let num = 0;
const Navbar2 = () => {
  const { t, i18n } = useTranslation();
  
  const handleBookClick = () => {
    alert("The internationalization of languages (i18n) applies only to the Home page and the Service page.");
  };

  const handleClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }

    if(num==0){
      handleBookClick();
      num++;
    }
  };

  return (
    <Suspense fallback="loading">
      <>
        <Navbar data-bs-theme="dark">
          <Container>
            <Navbar.Brand>
              <Link
                to="/flavorlab"
                style={{ color: "rgba(212, 109, 7, 0.885)" }}
              >
                {t('home')}
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link
                to="/flavorlab/services"
                style={{ color: "rgba(212, 109, 7, 0.885)" }}
              >
                {" "}
                {t('services')}
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Button variant="link" style={{ color: "rgba(212, 109, 7, 0.885)", fontSize:"20px"}}onClick={() => handleClick()}>{t('lang')}</Button>
            </Navbar.Brand>
            <Navbar.Brand className="logo">
              <img width="110" src={logo}></img>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link
                to="/flavorlab/instructors"
                style={{ color: "rgba(212, 109, 7, 0.885)" }}
              >
                {" "}
                {t('instructors')}
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link
                to="/flavorlab/meals"
                style={{ color: "rgba(212, 109, 7, 0.885)" }}
              >
                {" "}
                {t('meals')}
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link
                to="/flavorlab/booking"
                style={{ color: "rgba(212, 109, 7, 0.885)" }}
              >
                {" "}
                {t('reserve')}
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </Suspense>
  );
};

export default Navbar2;
