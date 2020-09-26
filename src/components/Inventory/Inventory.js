import React from "react";
import Form from "./Form";
import CustomizedTables from "./Table";

export default function Inventory({ inventory }) {
  //console.log(inventory);

  return (
    <div className="container">
      <Form />
      <CustomizedTables inventory={inventory} />
    </div>
  );
}
