/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/missionCarousel.module.scss";
type Props = {};
import { Image } from "";
export default function MissionCarousel({}: Props) {
  return (
    <div className={styles.missionCarousel}>
      <Carousel className="w-50 mx-auto">
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://picsum.photos/id/237/300/200"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://picsum.photos/id/237/300/200"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
