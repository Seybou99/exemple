import React from "react";
import videoBg from "../../assets/video/lba_partenariat_video.mp4";
import Cards2 from "../Cards2";
import Domaine from "../Domaine";
import Footer from "../Footer";
import Form from "../Form";
import Mention from "./Mention";
import { Container, Row, Col } from "react-bootstrap";

const Partenariat = () => {
      return (
        <div className="main">
          <video src={videoBg} autoPlay loop muted />
          <Container>
            <Row>
              <Col md={4}>
                <div className="content">
                  <h1 className="homepageTitle">Partenariat en Alternance avec La-Bonne-Alternance.com</h1>
                  <p>
                    Vous avez besoin de recruter du personnel ? Avez-vous déjà pensé à La Bonne Alternance ? Bénéficiez d'un suivi personnalisé vous permettant de recruter les jeunes talents de demain !
                  </p>
                  <Form />
                </div>
              </Col>
            </Row>
          </Container>
          <Cards2 />
          <Domaine />
          <Footer />
          <Mention />
        </div>
  )
}

export default Partenariat