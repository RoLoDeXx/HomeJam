import React from "react";
import Card from "./Card";
import Styles from "./style.module.css";
const Review = () => {
  return (
    <div>
      <div className={`${Styles.customerReviews} mt-5`}>
        <Card
          location="Palo Alto, CA"
          imagePth="Img1"
          genre="Folk"
          name="Benny Dayal"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus nisi ut efficitur ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac  "
        />
        <Card
          location="Palo Alto, CA"
          imagePth="Img2"
          genre="Bollywood"
          name="Vijay Yesudas"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus nisi ut efficitur ornare. "
        />
        <Card
          location="Palo Alto, CA"
          imagePth="Img3"
          genre="Folk"
          name="Andrea Jeremiah"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus nisi ut efficitur ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis "
        />
      </div>
    </div>
  );
};

export default Review;
