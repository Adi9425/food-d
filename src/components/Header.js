import React, { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px of scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <a href="/" className="logo">
          <img src="/logo-light.png" alt="RESCAF Logo" className="logo-image" />
        </a>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <nav className={`nav ${menuActive ? "active" : ""}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/pages" className="nav-link">Pages</a>
          <a href="/menus" className="nav-link">Menus</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        <a href="/reservation" className="cta-button">Reservation</a>
      </div>
    </header>
  );
}
