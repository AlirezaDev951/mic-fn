import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "./PDPContent";
import SafeComponent from "./SafeComponent";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <PDPContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(
  <SafeComponent>
    <App />
  </SafeComponent>,
  document.getElementById("app")
);
