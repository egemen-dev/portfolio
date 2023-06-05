import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Stack from "./components/Stack";

export default function App() {
  function revealCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (isInViewport(card)) {
        if (card.classList.contains("out")) {
          card.classList.remove("out");
          card.classList.add("in");
        }
      } else {
        if (card.classList.contains("in")) {
          card.classList.remove("in");
          card.classList.add("out");
        }
      }

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.bottom * 0.85 <= window.innerHeight;
      }
    });
  }

  window.addEventListener("scroll", revealCards);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Navbar /> */}

      <Welcome />

      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl font-bold text-center mt-24">Projects</h2>
        <div className="divider mb-24"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Skills />
        <div className="pt-10">
          <Stack />
        </div>
      </div>

      {/* skills section like javascript */}
      {/* Skills and Technologies section */}

      <Footer />
    </div>
  );
}
