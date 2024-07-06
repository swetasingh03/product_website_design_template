import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import product1 from "../assets/images/arrivalImage/product1.jpg";
import product2 from "../assets/images/arrivalImage/product2.jpg";
import product3 from "../assets/images/arrivalImage/product3.jpg";
import product4 from "../assets/images/arrivalImage/product4.jpg";
import product5 from "../assets/images/arrivalImage/product5.jpg";
import product6 from "../assets/images/arrivalImage/product6.jpg";
import product7 from "../assets/images/arrivalImage/product7.png";
import product8 from "../assets/images/arrivalImage/product8.jpg";

const arrivalData = [
  {
    img: product1,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product2,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product3,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product4,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product5,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product6,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product7,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
  {
    img: product8,
    content: "Lorem Ipsum is simply dummy",
    price: "Starting at $99.00",
  },
];
function Arrival() {
  return (
    <Container className="arrival-container">
      <h1 className="heading">New Arrival On Store</h1>
      <Row>
        {arrivalData &&
          arrivalData.map((data) => {
            return (
              <Col md={3}>
                <div
                  className="product-card"
                  style={{
                    border: "none",
                    padding: "20px",
                    // textAlign: "center",
                  }}
                >
                  <img
                    src={data.img}
                    alt="Product"
                    style={{
                      width: "300px",
                      height: "300px",
                      marginBottom: "10px",
                    }}
                  />
                  <h4>{data.content}</h4>
                  <h5 style={{ color: "#039c03", fontWeight: "400" }}>
                    {data.price}
                  </h5>
                  <Button variant="dark" className="my-3 w-100">
                    Add to Cart
                  </Button>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default Arrival;
