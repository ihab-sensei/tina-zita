import React from "react";
import Form from "./Form";
import Table from "./Table";

export default function Inventory({ inventory }) {
  console.log(inventory);

  return (
    <div className="container">
      <Form />
      <Table />
    </div>
  );
}
