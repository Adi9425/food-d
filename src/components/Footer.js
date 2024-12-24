import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <img src="/logo-light.png" alt="RESCAF" className="footer-logo" />
          <p className="footer-text">20, floor, Queenslad Victoria Building.<br />60 california street california USA</p>
        </div>
        <div>
          <h4 className="footer-heading">FOOD MENU</h4>
          <ul className="footer-list">
            <li>Chees croissants</li>
            <li>Bruschetti</li>
            <li>Awesome Vegetables</li>
            <li>Tasty Snacks</li>
            <li>Meal for whole family</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">OPENING HOURS</h4>
          <ul className="footer-list">
            <li>Mon - Tues : 6.00 am - 10.00 pm</li>
            <li>Wednes - Thurs : 8.00 am - 6.00 pm</li>
            <li>Launch : Everyday</li>
            <li>Sun : <span className="footer-highlight">Closed</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}