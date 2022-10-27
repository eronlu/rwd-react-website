import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>傳說啟程!由你選擇!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/react-rwd-website/images/img-9.jpg"
              text="Explore the hidden waterfall deep"
              label="Adventure"
              paht="/services"
            />
            <CardItem
              src="react-rwd-website/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              paht="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./react-rwd-website/images/img-6.jpg"
              text="Guess u dont notice this text"
              label="City"
              paht="/services"
            />
            <CardItem
              src="./react-rwd-website/images/img-4.jpg"
              text="English has better look in this area."
              label="Sport"
              paht="/services"
            />
            <CardItem
              src="./react-rwd-website/images/img-8.jpg"
              text="Must come, because sand is fun, or u can just take a rock pet."
              label="Sand"
              paht="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
