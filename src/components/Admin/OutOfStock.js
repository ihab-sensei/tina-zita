import React from "react";
import Table from "../Inventory/Table";

//this component fetch from db only the product which are about to expiring
//hard coded db
const inventory = [
  {
    name: "Lemon",
    unit: 0,
    category: "Turunçgillerden Meyve",
    quantity: 0,
    code: "FH124",
    expiryDate: "2020/09/30",
  },
];

export default function OutOfStock() {
  return (
    <div style={{ marginTop: "10px" }}>
      <h2>Products out of stock</h2>
      <Table inventory={inventory} />
    </div>
  );
}
