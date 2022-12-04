import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
      
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Senior Web Developer"
              date="May 2022 - Present"
              content={[
                "UTech , Ned University of Engineering and Technology",
                "Senior Web Development Instructor at UTech Digital Edution.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="MemberShip Team IISE-DUET-Chapter- (2021-Present)"
              content={[
                "Managing the organization Members ",
              ]}
            />
            <Resumecontent
              title="Social Media Marketing [DawoodianMedia- 2021-Present ]"
              content={[
                "Worked on Marketing through Social Media",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.E in Industrial Engineering and Management [DUET, Karachi] "
              date="2021 - Present"
              content={[`CGPA: Not Announced`]}
            />
            <Resumecontent
              title="INTERMEDIATE [Guards Public Degree College, Karachi]"
              date="2019 - 2021"
              content={["Grade : A"]}
            />
            <Resumecontent
              title="Matriculation [The Smart School, Karachi] "
              date="2017 - 2019"
              content={["Precentage: 81.4%"]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                "Front-End Development From Jawan Pakistan",
                "Full MERN Stack Development from Jawan Pakistan",
                "Python Programming Essentials from CISCO Networking Academy",
                "Freelancing WorkShop From Jawan Pakistan",
                "Introduction to FreeLancing WorkShop Dawood University",
                "Art of Public Speaking from Advance Institute of Mentoring",
              ]}
            />
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}

export default Resume;
