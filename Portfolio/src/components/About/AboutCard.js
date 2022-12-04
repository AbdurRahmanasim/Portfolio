import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdur Rahman Asim </span>
            from <span className="purple"> karachi, Pakistan.</span>
            <br />I am currently 2nd year B.E student of Industrial Engineering & Management
             at DUET, Karachi. I'm{" "}
            <b className="purple"> Web developer</b> and
            <b className="purple"> App developer.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development, Machine Learning.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />
              Digital Marketing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "It is never too late to be what you might have been."{" "}
          </p>
          <footer className="blockquote-footer">Abdur Rahman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
