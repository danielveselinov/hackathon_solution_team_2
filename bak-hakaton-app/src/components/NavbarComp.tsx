import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../styles/HeaderStyles/navbar.module.scss";

type Props = {};

export default function NavbarComp({}: Props) {
  return (
    <Navbar>
      <Container>
        <Row className="w-100 justify-content-betweeen">
          <Col className="col-4">
            <Navbar.Brand className={styles.test} href="#home">
              BAK
            </Navbar.Brand>
          </Col>
          <Col className="col-8 mr-auto justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav "
            >
              <Nav>
                <Nav.Link className={styles.test} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className={styles.test} href="#link">
                  About us
                </Nav.Link>
                <Nav.Link className={styles.test} href="#link">
                  Mission
                </Nav.Link>
                <NavDropdown
                  className={styles.test}
                  title="Services"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className={styles.test} href="#action/3.1">
                    Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className={styles.test} href="#link">
                  Careers
                </Nav.Link>
                <Nav.Link className={styles.test} href="#link">
                  Contact
                </Nav.Link>
              </Nav>
              <a href="#">
                <span>EN</span>
              </a>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
