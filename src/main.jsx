import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Card from "./components/Card/card.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

//import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    {/*<Card />*/}
    <App />
  </React.StrictMode>
);
