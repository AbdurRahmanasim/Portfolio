import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed By Abdur Rahman Asim</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
               
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                
                style={{ color: "white" }}
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
               
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
               
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Design Template by{" "}
        <a
          href="https://github.com/soumyajit4419/Portfolio"
          style={{ color: "white" }}
        >
          Abdur Rahman Asim
        </a>{" "}
      </h1>
    </Container>
  );
}

export default Footer;
