import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";
import "remixicon/fonts/remixicon.css";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <HomeContent />
    <div className="my-10"></div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
