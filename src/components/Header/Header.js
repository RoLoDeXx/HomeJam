import React from "react";
import styles from "./style.module.css";
import Drawer from "./Drawer";
import siteLogo from "../../assets/images/logo/logo.png";
const Header = () => {
  return (
    <div
      className={`${styles.header} d-flex align-items-center justify-content-between
       font-nunito 
      `}
    >
      <img src={siteLogo} alt="site logo" />

      <div className="d-none d-md-flex ">
        <a
          href={() => false}
          className="d-flex align-items-center btn border-0 bg-transparent mx-4 p-0 text-white"
        >
          <img src={require("../../assets/icons/glass.png").default} alt="" />{" "}
          &nbsp;Search
        </a>
        <a
          href={() => false}
          className="btn border-0 bg-transparent mx-4 p-0 text-white"
        >
          Help
        </a>
        <a
          href={() => false}
          className="btn border-0 bg-transparent mx-4 p-0 text-white"
        >
          Account
        </a>
        <a
          href={() => false}
          className="d-flex align-items-center btn border-0 bg-transparent mx-4 p-0 text-white"
        >
          <img src={require("../../assets/icons/cart.png").default} alt="" />{" "}
        </a>
      </div>
      <div className="d-flex d-md-none">
        <a
          href={() => false}
          className="d-flex align-items-center btn border-0 bg-transparent mx-4 p-0 text-white"
        >
          <img
            src={require("../../assets/icons/glass.png").default}
            alt="glass"
          />
        </a>
        <a
          href={() => false}
          className="d-flex align-items-center btn border-0 bg-transparent mx-4 p-0 text-white"
        >
          <img
            src={require("../../assets/icons/cart.png").default}
            alt="cart"
          />
        </a>
        <Drawer />
      </div>
    </div>
  );
};

export default Header;
