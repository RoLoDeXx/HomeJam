import React from "react";
import Styles from "./style.module.css";
import { makeStyles } from "@material-ui/core/styles";

const Label = ({ hasHeart, value, name }) => {
  const useStyles = makeStyles((theme) => ({
    grad: {
      "&:before": {
        background: `linear-gradient(90deg, transparent ${
          100 - value
        }%, #dd4cac ${value}%)`,
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className={`${Styles.label} ${classes.grad} text-center`}>
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
