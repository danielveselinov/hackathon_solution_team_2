/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/HeaderStyles/heroBanner.module.scss";
export default function HeroBanner() {
  return (
    <>
      {/* <div className={styles.HeroBannerContainer}> */}
      <div className={styles.HeroBanner}>
        <div className={styles.letterB}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.letterA}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={1300}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.letterK}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={1400}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1600}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1600}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1658043854029-ef42987ed6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
