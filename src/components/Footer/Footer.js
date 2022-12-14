import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './Footer.css'
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {

  return (
    <footer>
      <Container className="py-3">
        <Row className="justify-content-center my-5">
          <Col md="10" className="text-center text-md-start">
            <a href="/">
              <StaticImage
                src="../../images/logo_hive_black.webp"
                loading="eager"
                alt="Logo"/>
            </a>
          </Col>
        </ Row>

        <Row className="columns-footer">
          <Col md="6">
            <ul>
              <li>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                </i>
                <span>
                  <a href="tel:+18882413821"> + 1888.241.38.21</a>
                </span>
              </li>
              <li>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                </i>
                <span>
                  <a href="tel:+18882413821">
                    <span>
                      <span>3340 Peachtree Rd NE Suite 1275 Atlanta.</span> <br />
                      <span className="ms-4">Georgia, United States</span>
                    </span>
                  </a>
                </span>
              </li>
              <li>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                </i>
                <span>
                  <a href="tel:+18882413821">www.hivefinancialassets.com</a>
                </span>
              </li>
              <li>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                </i>
                <span>
                  <a href="tel:+18882413821">Hive Financial Systems</a>
                </span>
              </li>
            </ul>
          </Col>
          <Col md="6">
            <form action="">
              <input type="text" name="" id=""  placeholder="Your name"/>
              <input type="text" name="" id=""  placeholder="Your email"/>
              <textarea name="" id="" rows="5" placeholder="Your message"></textarea>
              <button type="submit">SEND YOUR MESSAGE</button>
            </form>
          </Col>
        </Row>
        <p className="text-center copy">COPYRIGHT © 2022 HIVE FINANCIAL ASSETS - ALL RIGHTS RESERVED</p>
      </Container>
    </footer>
  )
}

export default Footer