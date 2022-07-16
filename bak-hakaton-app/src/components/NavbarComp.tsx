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
    // Tuka treba da se napravi ako rutata !/home, da bide transparent
    <Navbar
      className={styles.transparent}
      // className="bg-transparent"
      expand="lg"
    >
      <Container>
        <Row className="w-100 justify-content-between">
          <Col className="col-6">
            <Navbar.Brand className={styles["navbar-dark-text"]} href="#">
              BAK
            </Navbar.Brand>
          </Col>
          <Col className="col-6 d-flex justify-content-end">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className={styles["navbar-dark-text"]} href="/">
                  Home
                </Nav.Link>
                <Nav.Link className={styles["navbar-dark-text"]} href="about">
                  About us
                </Nav.Link>
                <Nav.Link className={styles["navbar-dark-text"]} href="mission">
                  Mission
                </Nav.Link>
                <NavDropdown
                  className={styles["navbar-dark-text"]}
                  title="Services"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="land-freight">
                    Land Freight
                  </NavDropdown.Item>
                  <NavDropdown.Item href="water-freight">
                    Water Freight
                  </NavDropdown.Item>
                  <NavDropdown.Item href="air-freight">
                    Air Freight
                  </NavDropdown.Item>
                  <NavDropdown.Item href="warehouse-storage">
                    Warehouse Storage
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className={styles["navbar-dark-text"]} href="careers">
                  Careers
                </Nav.Link>
                <Nav.Link className={styles["navbar-dark-text"]} href="contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
