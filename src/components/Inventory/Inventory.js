import React from "react";
import Form from "./Form";
import Inventorytable from "./Table";
import "./style.css";

export default function Inventory({ inventory }) {
  console.log(inventory);

  return (
    <div className="container">
      <Inventorytable inventory={inventory} />
      <Form />
    </div>
  );
}
