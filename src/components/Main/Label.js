import React from "react";
import Styles from "./style.module.css";
const Label = ({ hasHeart, value, name }) => {
  return (
    <div className={`${Styles.label} text-center`}>
      <div className="text-white">
        <img
          src={
            hasHeart
              ? require(`../../assets/icons/heart.png`).default
              : require(`../../assets/icons/calendar.png`).default
          }
          alt="icon-pin"
        />
        <p className="my-2 font-baskerville">{value}</p>
        <p className="my-2 font-nunito">
          <small>{name}</small>
        </p>
      </div>
    </div>
  );
};

export default Label;
