import React, {useState, useEffect} from "react";
import videoBg from "../../assets/video/lba_landingpage_video.mp4";
import imageBg from  "../../assets/img/videoBgPlaceHolder.png"
import Card from "../card";
import Domaine from "../Domaine";
import Form from "../Form";
import { Container, Row, Col } from "react-bootstrap";

const Homepage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    // Met à jour l'état en fonction de la largeur de l'écran
    const handleScreenResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    // Ajoute un écouteur pour détecter les changements de taille d'écran
    mediaQuery.addListener(handleScreenResize);

    // Appel initial pour définir l'état initial
    handleScreenResize();

    // Nettoyage de l'écouteur lorsqu'il n'est plus nécessaire
    return () => {
      mediaQuery.removeListener(handleScreenResize);
    };
  }, []);

  return (
    <div className="main">
      {isMobile ? (
        <img src={imageBg} alt="Mobile Background" className="mobile-background" />
      ) : (
        <video src={videoBg} autoPlay loop muted />
      )}
      <Container className="px-2">
        <Row>
          <Col md={4}>
            <div className="content">
              <h1 className="homepageTitle">Faîtes comme lui et obtenez la bonne alternance !</h1>
              <p>
                Vous êtes étudiant et cherchez la formation parfaite en alternance ?
                Vous êtes au bon endroit ! Remplissez notre formulaire d'orientation
                et laissez-nous vous guider vers la formation qui vous correspond le mieux.
              </p>
              <Form />
            </div>
          </Col>
        </Row>
      </Container>
      <Card />
      <Domaine />
      {/* <Mention /> */}
    </div>
  );
};

export default Homepage;