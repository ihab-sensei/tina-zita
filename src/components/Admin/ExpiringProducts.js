import React from "react";
import Table from "../Inventory/Table";
//this component fetch from db only the product which are about to expiring
//hard coded db
const inventory = [
  {
    name: "Elma",
    unit: 23,
    category: "Meyve",
    quantity: 2,
    coded: "ELA184",
    expiryDate: "2020/10/01",
  },
];
//<Table inventory={inventory} />

export default function ExpiringProducts() {
  return (
    <div style={{ marginTop: "10px" }}>
      <h2>Expring Products</h2>
      <Table inventory={inventory} />
    </div>
  );
}
