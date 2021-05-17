import React from "react";
import Styles from "./style.module.css";

const Card = ({ imagePth, location, name, body }) => {
  return (
    <div className={`${Styles.card}`}>
      <div className="d-flex align-items-center">
        <img
          src={
            require(`../../../assets/images/profiles/${imagePth}.png`).default
          }
          alt="profile"
        />
        <div className={Styles.cardBody}>
          <p className="mb-0 mx-3 font-quattrocento">{name}</p>
          <div className="d-flex mx-3">
            <img src="" alt="" />
            <small className="font-weight-light">{location}</small>
          </div>
        </div>
      </div>
      <p className="text-white mt-4">{body}</p>
    </div>
  );
};

export default Card;
