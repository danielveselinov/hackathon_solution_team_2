/* eslint-disable @next/next/no-img-element */
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
import logoDark from "../../public/images/logo-dark.png";
import logoLight from "../../public/images/logo-light.png";
export default function NavbarComp() {
  const { pathname } = useRouter();
  const [searchValue, setSearchValue] = useState("");

  return (
    // Tuka treba da se napravi ako rutata !/home, da bide transparent
    <div className="position-absolute pt-lg-5 pt-2 w-100">
      <nav
        className="navbar navbar-expand-lg bg-transparent
       px-4 px-lg-5 py-3 py-lg-0 sticky-top  d-flex justify-content-between align-items-center"
      >
        <Link href="/">
          <a className="navbar-brand p-0">
            <img
              className={styles.logoStyles}
              src={pathname === "/" ? logoDark.src : logoLight.src}
              alt=""
            />
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
          <div
            className={`${
              pathname === "/"
                ? `${styles["navbar-dark-text"]}`
                : `${styles["navbar-light-text"]}`
            } ${styles["navbar-dark-text"]} navbar-nav ms-auto py-0 pe-4`}
          >
            <Link href="/">
              <a
                className={`${
                  pathname === "/" ? `${styles.active}` : undefined
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`${
                  pathname === "/about" ? `${styles.active}` : undefined
                }`}
              >
                About us
              </a>
            </Link>
            <Link href="/mission">
              <a
                className={`${
                  pathname === "/mission" ? `${styles.active}` : undefined
                }`}
              >
                Mission
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`${
                  pathname === "/services" ? `${styles.active}` : undefined
                }`}
              >
                Services
              </a>
            </Link>
            <Link href="/careers" className=" ">
              <a
                className={`${
                  pathname === "/careers" ? `${styles.active}` : undefined
                }`}
              >
                Careers
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`${
                  pathname === "/contact" ? `${styles.active}` : undefined
                }`}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
