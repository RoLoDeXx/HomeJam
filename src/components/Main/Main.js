import React from "react";
import Header from "../Header/Header";
import Label from "./Label";
import Styles from "./style.module.css";
import Upcoming from "./UpcomingSection/Upcoming";
import Review from "./ReviewSection/Review";

const Main = () => {
  return (
    <div>
      <div className={Styles.backdrop}>
        <Header />
      </div>
      <section className={Styles.landingSection}>
        <div>
          <h1 className="font-baskerville">Cari Cari</h1>
          <p className="font-nunito font-weight-light">
            Live from their sofa to yours. Get closer to your favorite <br />
            artists, and never miss out.
          </p>
        </div>
        <div className={Styles.landingSectionLapels}>
          <Label hasHeart={true} value="0" name="Label" />
          <Label hasHeart={false} value="0" name="Label" />
          <Label hasHeart={false} value="0" name="Label" />
          <Label hasHeart={false} value="0" name="Label" />
        </div>
      </section>
      <section>
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="mb-0 font-baskerville text-white">Upcoming Shows</h2>
          <button className="font-nunito button border-0 bg-transparent text-white">
            View All
          </button>
        </div>
        <Upcoming />
      </section>
      <section className="mb-5 pt-5">
        <div className="mt-5 d-flex align-items-center justify-content-between font-nunito">
          <h2 className="font-baskerville text-white">Reviews</h2>
          <div className="d-flex align-items-center">
            <p className="mb-0 mx-3 text-white">
              <b>1</b> / 12
            </p>
            <img
              src={require("../../assets/icons/arrow.png").default}
              alt="left-arrow"
              className="btn"
            />
            <img
              src={require("../../assets/icons/arrow-right.png").default}
              alt="right-arrow"
              className="btn"
            />
          </div>
        </div>
        <Review />
      </section>
    </div>
  );
};

export default Main;
