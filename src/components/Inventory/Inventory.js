import React from "react";
import Form from "./Form";
import Inventorytable from "./Table";
import "./style.css";

export default function Inventory({ inventory, reFetch }) {
  return (
    <div className="inventoryContainer">
      <Inventorytable inventory={inventory} />
      <Form reFetch={reFetch} />
    </div>
  );
}
