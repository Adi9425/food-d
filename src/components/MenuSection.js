import React, { useState } from "react";
import "./MenuSection.css";

const menuItems = [
  {
    id: 1,
    name: "Crispy Crust Pizzeria",
    price: 5.9,
    image: "/pizza.jpg",
    ingredients: "Mutton / Olive Oil / Salt",
    category: "Pancakes",
  },
  {
    id: 2,
    name: "Luger Burger",
    price: 18.1,
    image: "/burger.jpg",
    ingredients: "Beef / Olive Oil / Salt",
    category: "Sandwiches",
  },
  {
    id: 3,
    name: "Fries McDonald's",
    price: 6.0,
    image: "/fries.jpg",
    ingredients: "Chicken / Olive Oil / Salt",
    category: "Brunch",
  },
];

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenuItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2 className="menu-discover">Discover</h2>
        <h3 className="menu-title">OUR MENU</h3>
        <p className="menu-description">
          While mirth large of on front. Ye he greater related adapted proceed
          entered an. Through it examine express promise no. Past add size game
          cold girl off how old.
        </p>
      </div>

      <div className="menu-categories">
        {["All", "Pancakes", "Sandwiches", "Brunch", "Vegetarian", "Meat"].map(
          (category) => (
            <button
              key={category}
              className={`menu-category ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="menu-list">
        {filteredMenuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <h4>{item.name}</h4>
            <p>{item.ingredients}</p>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
