import * as React from "react"
import './header.css'
import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Header = ({ siteTitle }) => (
  <header>

    <Container>
      <Row className="justify-content-center py-3">
        <Col md="10">
          <Row>
            <Col xs="6">
              <a href="/">
                <StaticImage
                  // style={{width:"50%"}}
                  src="../../images/logo_hive.webp"
                  loading="eager"
                  alt="Logo"/>
              </a>
            </Col>
            <Col className="col-6 d-flex justify-content-end align-items-center">
              <Nav
                  activeKey="/home" >
                
                <Nav.Item>
                  <Nav.Link href="/">TEAM</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/">EVENTS</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

      
  </header>
)

export default Header
