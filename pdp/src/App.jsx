import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "./PDPContent";
import SafeComponent from "./SafeComponent";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(
  <SafeComponent>
    <App />
  </SafeComponent>,
  document.getElementById("app")
);
