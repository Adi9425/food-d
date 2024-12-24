import React from "react";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Official Packages</h1>
        <div className="hero-stats">
          <div className="hero-stat">40 FOOD</div>
          <div className="hero-stat">19 DRINKS</div>
          <div className="hero-stat">28 SOUP</div>
        </div>
        <button className="hero-button">ORDER NOW</button>
      </div>
    </section>
  );
}
