import React from "react";
import BillsForm from "./BillsForm";
import BillsTable from "./BillsList";
import "./style.css";

export default function Bills() {
  //console.log(inventory);

  return (
    <div className="container">
      <BillsTable  />
      <BillsForm />
    </div>
  );
}