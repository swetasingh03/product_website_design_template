import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import shop1 from "../assets/images/shopImage/shop1.jpg";
import shop2 from "../assets/images/shopImage/shop2.jpg";
import shop3 from "../assets/images/shopImage/shop3.jpg";
import shop4 from "../assets/images/shopImage/shop4.jpg";
import shop5 from "../assets/images/shopImage/shop5.jpg";
import shop6 from "../assets/images/shopImage/shop6.jpg";

const shopData = [
  {
    img: shop1,
  },
  {
    img: shop2,
  },
  {
    img: shop3,
  },
  {
    img: shop4,
  },
  {
    img: shop5,
  },
  {
    img: shop6,
  },
];

const ImageCard = ({ img }) => {
  return (
    <Card
      className="text-center"
      style={{ position: "relative", border: "none" }}
    >
      <Card.Img src={img} alt="Card Image" style={{ height: "450px" }} />
      <Button
        style={{
          position: "absolute",
          top: "90%",
          left: "50%",
          width: "80%",
          margin: "0px 10px",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Glass effect
          backdropFilter: "blur(10px)", // Blur effect
          border: "none",
          color: "#000",
          fontSize: "1rem",
          cursor: "pointer",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Face Cream
      </Button>
    </Card>
  );
};
function Shop() {
  return (
    <div className="shop-container">
      <h1 className="heading">Shop By Range</h1>
      <Row className="justify-content-center my-4 mx-4">
        {shopData &&
          shopData.length > 0 &&
          shopData.map((data) => {
            return (
              <Col md={4} className="my-2">
                <ImageCard img={data.img} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default Shop;
