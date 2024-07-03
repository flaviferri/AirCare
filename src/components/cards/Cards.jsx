import React from "react";
import "./public/css/styles.css";

const Cards = (title, content) => {
  return (
      <div className="ContainerCards">
        <div className="Cards">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="Cards">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="Cards">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
    </div>
  );
};
export default Cards;
