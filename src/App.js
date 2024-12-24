import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
// import { ChefsSection } from "./components/ChefsSection";
// import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";
import OurStory from './components/OurStory';
import "./App.css";


function App() {
  return (
    <div className="app">
      {/* Shared Background Video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-bg-poster.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <Header />
        <Hero />
        <OurStory/>
        <MenuSection />
        <TestimonialsSection />
        {/* <ChefsSection /> */}
        {/* <BlogSection /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
