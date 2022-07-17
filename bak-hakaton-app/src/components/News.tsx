/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Card, CardGroup, Carousel, Col, Row } from "react-bootstrap";
// import styles from "../styles/news.module.scss";

import styles from "../styles/news.module.scss";

export default function News() {
  return (
    <div className={styles.NewsContainer}>
      <h2 className="text-center">News</h2>
      <div className={styles.NewsWrapper}>
        <Carousel>
          <Carousel.Item>
            <Row
              className={`${styles.RowCustomWidth} m-auto justify-content-between `}
            >
              <Card className="col-lg-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
              <Card className="col-lg-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
              <Card className="col-lg-3  bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row
              className={`${styles.RowCustomWidth} m-auto justify-content-between`}
            >
              <Card className="col-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
              <Card className="col-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
              <Card className="col-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row
              className={`${styles.RowCustomWidth} m-auto justify-content-between`}
            >
              <Card className="col-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
              <Card className="col-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
              <Card className="col-3 bg-transparent border-0">
                <Link href="/">
                  <a>
                    <Card.Img
                      variant="top"
                      src="https://i.picsum.photos/id/195/200/300.jpg?hmac=4jGQkshsI0i2q2zt0L5AnB3c8yyqVBkmkYR0zDKIpRQ"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Link>
              </Card>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
