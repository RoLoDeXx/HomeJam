import React from "react";
import Styles from "./style.module.css";

const Card = ({ imagePth, genre, name }) => {
  return (
    <div className={Styles.card}>
      <img
        src={require(`../../../assets/images/cards/${imagePth}.png`).default}
        alt=""
      />
      <div className={Styles.cardBody}>
        <small>{genre}</small>
        <p className="font-baskerville">{name}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center btn">
            <p className="mb-0 text-primary">More Info</p>
            <img
              className="mx-2"
              src={require("../../../assets/icons/arrow-blue.png").default}
              alt=""
            />
          </div>

          <div className={Styles.divider}>
            <img
              className="btn"
              onMouseEnter={(e) =>
                (e.target.src =
                  require("../../../assets/icons/ticket-solid.png").default)
              }
              onMouseLeave={(e) =>
                (e.target.src =
                  require("../../../assets/icons/ticket.png").default)
              }
              src={require("../../../assets/icons/ticket.png").default}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
