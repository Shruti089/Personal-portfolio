import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logoimg from "../assets/img/logoimg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import cn from '../assets/img/cn.jpeg';
import githublogo from '../assets/img/githublogo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logoimg} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
               <a href="https://www.linkedin.com/in/prachi-kashyap-154443224/"><img src={navIcon1} alt="Icon" /></a>
               <a href="https://github.com/dashboard"><img src={githublogo} alt="Icon" /></a>
              <a href="https://www.naukri.com/code360/profile/Prachi_08"><img src={cn} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
