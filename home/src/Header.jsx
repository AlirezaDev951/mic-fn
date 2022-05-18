import React from "react";
import { Link } from "react-router-dom";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
const Header = () => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          <Link to="/">Fidget Spinner World</Link>
        </div>
        <div className="flex-end relative">
          <di className="flex gap-5">
            <Link to="/cart">Cart</Link>
            <MiniCart />
            <Login />
          </di>
        </div>
      </div>
    </div>
  );
};

export default Header;
