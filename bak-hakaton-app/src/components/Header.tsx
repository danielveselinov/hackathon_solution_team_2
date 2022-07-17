import React from "react";
import HeroBanner from "./HeroBanner";
import NavbarComp from "./NavbarComp";
import styles from "../styles/HeaderStyles/headerGlobal.module.scss";
import MainTitle from "./MainTitle";

export default function Header() {
  return <div className={styles["Header"]}>{/* <HeroBanner /> */}</div>;
}
