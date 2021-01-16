import React from "react";
import "./card.scss";

const Card = ({ caption, flag, uniqueId, onCardClick, winIndex }) => {
  const isCardInWinIndex = winIndex && winIndex.includes(uniqueId);
  return (
    <div className="caption-card">
      <div
        onClick={() => onCardClick(uniqueId)}
        className={`${flag ? "card-green" : "card-red"} 
        ${isCardInWinIndex ? "blink" : ""} card-content`}
      >
        <label>{caption}</label>
      </div>
    </div>
  );
};

export default Card;
