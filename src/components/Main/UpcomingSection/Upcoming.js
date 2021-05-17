import React from "react";
import Card from "./Card";
import Styles from "./style.module.css";

const Upcoming = () => {
  return (
    <div className={`${Styles.upcomingShows} mt-5`}>
      <Card imagePth="Img1" genre="Folk" name="Benny Dayal" />
      <Card imagePth="Img2" genre="Bollywood" name="Vijay Yesudas" />
      <Card imagePth="Img3" genre="Folk" name="Andrea Jeremiah" />
      <Card imagePth="Img4" genre="Folk" name="Shilpa Rao" />
    </div>
  );
};

export default Upcoming;
