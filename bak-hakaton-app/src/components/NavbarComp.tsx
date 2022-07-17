// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
import styles from "../styles/HeaderStyles/navbar.module.scss";
import { BsFillCaretDownFill } from "react-icons/bs";
type Props = {};

export default function NavbarComp({}: Props) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  function onSearchHandle(e: SyntheticEvent) {
    e.preventDefault();
    console.log(searchValue);

    router.push({
      pathname: "/search",
      // ova se prakja vo URL-to i posle vo Index od istava strana go precekuvas vo ServerSideProps
      query: {
        q: searchValue,
      },
    });
  }
  return (
    // Tuka treba da se napravi ako rutata !/home, da bide transparent
    <div className="position-absolute p-0 w-100">
      <nav
        className="navbar navbar-expand-lg bg-transparent
       px-4 px-lg-5 py-3 py-lg-0 sticky-top  d-flex justify-content-between align-items-center"
      >
        <Link href="/">
          <a className="navbar-brand p-0">
            <h1 className="text-light m-0">
              <i className="fa fa-utensils me-3"></i>BAK
            </h1>
          </a>
        </Link>
        <button
          className="navbar-toggler d-lg-none d-md-block"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <i>
            <BsFillCaretDownFill />
          </i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4 ">
            <Link href="/">
              <a className={`${styles["navbar-dark-text"]}`}>Home</a>
            </Link>
            <Link href="/about">
              <a className={`${styles["navbar-dark-text"]}`}>About us</a>
            </Link>
            <Link href="/mission">
              <a className={`${styles["navbar-dark-text"]}`}>Mission</a>
            </Link>
            <Link href="/services">
              <a className={`${styles["navbar-dark-text"]}`}>Services</a>
            </Link>
            <Link href="/careers" className=" ">
              <a className={`${styles["navbar-dark-text"]}`}>Careers</a>
            </Link>
            <Link href="/contact">
              <a className={`${styles["navbar-dark-text"]}`}>Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
    // <Navbar
    //   className={styles.transparent}
    //   // className="bg-transparent"
    //   expand="lg"
    // >
    //   <Container>
    //     <Row className="w-100 justify-content-between">
    //       <Col className="col-6">
    //         <Navbar.Brand className={styles["navbar-dark-text"]} href="#">
    //           BAK
    //         </Navbar.Brand>
    //       </Col>
    //       <Col className="col-6 d-flex justify-content-end">
    //         <Navbar.Toggle aria-controls="navbarScroll" />
    //         <Navbar.Collapse className="justify-content-end" id="navbarScroll">
    //           <Nav
    //             className="my-2 my-lg-0"
    //             style={{ maxHeight: "100px" }}
    //             navbarScroll
    //           >
    //             <Nav.Link className={styles["navbar-dark-text"]} href="/">
    //               Home
    //             </Nav.Link>
    //             <Nav.Link className={styles["navbar-dark-text"]} href="about">
    //               About us
    //             </Nav.Link>
    //             <Nav.Link className={styles["navbar-dark-text"]} href="mission">
    //               Mission
    //             </Nav.Link>
    //             <NavDropdown
    //               className={styles["navbar-dark-text"]}
    //               title="Services"
    //               id="basic-nav-dropdown"
    //             >
    //               <NavDropdown.Item href="land-freight">
    //                 Land Freight
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="water-freight">
    //                 Water Freight
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="air-freight">
    //                 Air Freight
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="warehouse-storage">
    //                 Warehouse Storage
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //             <Nav.Link className={styles["navbar-dark-text"]} href="careers">
    //               Careers
    //             </Nav.Link>
    //             <Nav.Link className={styles["navbar-dark-text"]} href="contact">
    //               Contact
    //             </Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Navbar>
  );
}
