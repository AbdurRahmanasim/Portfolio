import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import quiz from "../../Assets/Projects/quizar.png";
import notebook from "../../Assets/Projects/notebookar.png";
import news from "../../Assets/Projects/weatherar.png";
import atm from "../../Assets/Projects/atmar.png";
import weather from "../../Assets/Projects/newsar.png";
import hotel from "../../Assets/Projects/hotelar.png"




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              title="Quiz App"
              description="I build this Quiz App using MERN Technology. For FrontEnd i used React JS and for server side I used Node Js and for DataBase I used Mongo DB. I build this Web to take Quizes of Any time. I also added a Feature of time Limit for each Question. "
              link="https://quiz-by-ar.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notebook}
              title="NoteBook"
              description="I have created this project for the final submission of Front-End Development Course of Jawan Pakistan So basically this is a website which helps us to create notes and . It takes 2 inputs 1 for title and the other for description. You can add any title in title input and any description in description input"
              link="https://github.com/AbdurRahmanasim/NoteBook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              title="News App"
              description="I have created this project for Practice. This webste is basically a News App. i fetched an api for this project. I build it using HTML,CSS, JavaScript"
              link="https://github.com/AbdurRahmanasim/News-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              title="ATM"
              description="This is a project based on pure JavaScript. I build this project to learn more about JavaScript. In this project you first have to enter the atm pin and then you can withdraw amout from your accoung after checking account balance and account limit and atm balance"
              link="https://github.com/AbdurRahmanasim/Atm-Using-JavaScript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather App"
              description=".This website is created with basic HTML, CSS and JavaScript. This website helps to check the weather of any city and country in the world"
              link="https://github.com/AbdurRahmanasim/Weather-App`"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              title="Hotel Reservation"
              description="This is the Final Project of my MERN Stack Course. I build this using React Js , Redux , BootStrap , Node JS , Express JS , Mongo DB"
              link="https://github.com/AbdurRahmanasim/Hotel-Reservation-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
