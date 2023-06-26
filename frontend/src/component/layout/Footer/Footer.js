import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS Mobile Phone</p>
        <img src={playStore} alt="Play Store" />
        <img src={appStore} alt="App Store" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is Our First Priority</p>
        <p>Copyrights 2023 &copy; Abhprit</p>
      </div>
      <div className="rightFooter">
        <h4>Follow US</h4>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
