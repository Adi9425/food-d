import React from "react";
import "./ChefsSection.css";

const chefs = [
  { id: 1, name: "Chef Michael", role: "Head Chef", image: "/chef.jpg" },
];

export function ChefsSection() {
  return (
    <section className="chefs-section">
      <h2 className="chefs-title">MEET OUR EXPERTS</h2>
      <div className="chefs-list">
        {chefs.map((chef) => (
          <div key={chef.id} className="chef-card">
            <img src={chef.image} alt={chef.name} className="chef-image" />
            <h3>{chef.name}</h3>
            <p>{chef.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}