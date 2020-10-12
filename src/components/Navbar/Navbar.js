import React from "react";
import Admin from "../Admin/Admin";
import Inventory from "../Inventory/Inventory";
import Bills from "../Bills/Bills";
import Recipes from "../Recipes/Recipes";
import Orders from "../Orders/Order";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

export default function Navbar() {
  return (
    <div>
      <NavLink
        to="/admin"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Admin Dashboard
      </NavLink>
      <NavLink
        to="/inventory"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Inventory
      </NavLink>
      <NavLink
        to="/orders"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Orders
      </NavLink>
      <NavLink
        to="/recipes"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/bills"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Bills
      </NavLink>
    </div>
  );
}
