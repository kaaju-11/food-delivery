import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import CarouselComponent from "./Carousel";
import { ADD } from "../redux/actions/action";
const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div className="container mt-2">
      <CarouselComponent />
      <h2
        className="text-center"
        style={{ fontSize: "26px", fontFamily: " math", fontWeight: "800" }}
      >
        Top rated food in your city
      </h2>
      <div className="row gap-4 d-flex align-items-center mt-4">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "100%", maxWidth: "290px", border: "none" }}
                className="card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "12rem", borderRadius: "16px" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                      style={{ borderRadius: "10px", backgroundColor: "#fd5f0deb", border: "none" }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
