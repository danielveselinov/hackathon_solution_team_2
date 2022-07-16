/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/HeaderStyles/heroBanner.module.scss";
export default function HeroBanner() {
  return (
    <>
      <div className={styles.HeroBanner}>
        <div className={styles.letterB}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1657804561950-3732c7f0e81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982834964-ca4ae60d1ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982835397-a4286c125b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.letterA}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={300}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1657804561950-3732c7f0e81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={300}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982834964-ca4ae60d1ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={300}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982835397-a4286c125b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.letterKone}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={400}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1657804561950-3732c7f0e81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={600}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982834964-ca4ae60d1ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={600}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982835397-a4286c125b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styles.letterKtwo}>
          <Carousel fade variant="dark">
            <Carousel.Item interval={700}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1657804561950-3732c7f0e81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={400}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982834964-ca4ae60d1ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={200}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1638982835397-a4286c125b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
