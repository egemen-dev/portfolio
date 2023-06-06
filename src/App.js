import React from "react";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Stack from "./components/Stack";

export default function App() {
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom * 0.65 <= window.innerHeight;
  }

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
    });
  }

  window.addEventListener("scroll", revealCards);

  return (
    <div className="flex flex-col justify-center items-center">
      <Welcome />

      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl font-bold text-center mt-24">Projects</h2>
        <div className="divider mb-24"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 px-8">
          <Card
            appName="Weather Forecast App"
            description="This is a weather weather forecast app. Users can search for a city from the custom search bar and get the current weather forecast for next 7 days."
            stack={[
              "JavaScript",
              "HTML",
              "CSS",
              "Open-Meteo API",
              "Webpack",
              "Tailwind CSS",
            ]}
            filename={"weather-app.gif"}
            code={"https://github.com/egemen-dev/weather_app"}
            live={"https://egemen-dev.github.io/weather_app/"}
          />
          <Card
            appName="Full Stack Social Media App"
            description="This is a full stack social media app where users can connect with others and can create, comment and like posts."
            stack={["Ruby on Rails", "PostgreSQL", "Hotwire", "Bulma CSS"]}
            filename={"odinbar.gif"}
            code={"https://github.com/egemen-dev/odinbar"}
          />
          <Card
            appName="Task Manager App"
            description="This is a todo list app where users can create, edit and delete tasks. Tasks can be dragged and dropped to change their priority order. Task are automatically saved to local storage for next session."
            stack={["React", "SortableJS", "HTML", "Tailwind CSS"]}
            filename={"todo.gif"}
            code={"https://github.com/egemen-dev/react_todo_app"}
            live={"https://egemen-dev.github.io/react_todo_app/"}
          />
          <Card
            appName="Device Tracker App"
            description="This is a device tracker app. Admins can register devices and monitor their statuses as they are checked in and out."
            stack={["Ruby on Rails", "Simple CSS", "SQLite3"]}
            filename={"active-devices.jpg"}
            code={"https://github.com/egemen-dev/active_devices"}
          />
          <Card
            appName="Professional CV Builder"
            description="This is a cv builder app. Users can create a professional cv by filling out a dynamic form and then download it as a pdf."
            stack={["React", "HTML", "Tailwind CSS"]}
            filename={"cv-builder.gif"}
            code={"https://github.com/egemen-dev/react_cv_builder_app"}
            live={"https://egemen-dev.github.io/react_cv_builder_app/"}
          />
          <Card
            appName="Admin Dashboard"
            description="This is an admin dashboard. It is a responsive dashboard with a sidebar and a navbar. No frameworks were used. Pure HTML and CSS."
            stack={["HTML", "CSS"]}
            filename={"dashboard.gif"}
            code={"https://github.com/egemen-dev/admin_dashboard"}
            live={"https://egemen-dev.github.io/admin_dashboard/"}
          />
          <Card
            appName="Flight Booker App"
            description="This is a flight booker app. Users can search for flights and book them. Passengers receive an email confirmation after booking."
            stack={["Ruby on Rails", "Bulma CSS", "PostgreSQL"]}
            filename={"flight-booker.gif"}
            code={"https://github.com/egemen-dev/flight_booker"}
          />
          <Card
            appName="Etch-a-Sketch"
            description="This is an etch-a-sketch app. Users can draw on the canvas by hovering over it. They can also change the color of the pen and the size of the canvas."
            stack={["HTML", "CSS", "JavaScript"]}
            filename={"colors.gif"}
            code={"https://github.com/egemen-dev/etch-a-sketch"}
            live={"https://egemen-dev.github.io/etch-a-sketch/"}
          />
          <Card
            appName="Knights Travails"
            description="This is a knights travails app. It finds the shortest path for a knight to move from one square to another on a chess board."
            stack={["Ruby"]}
            filename={"chess-board.gif"}
            code={"https://github.com/egemen-dev/knights_travails"}
          />
        </div>
        <Skills />
        <div className="pt-24 flex flex-col justify-center items-center">
          <Stack />
        </div>
      </div>

      {/* skills section like javascript */}
      {/* Skills and Technologies section */}

      <Footer />
    </div>
  );
}
