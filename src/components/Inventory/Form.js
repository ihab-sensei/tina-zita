import React, { useState } from "react";
import db from "../../firebaseConfig";

export default function Form() {
  // const [code, setCode] = useState("");
  // const [expireDate, setExpireDate] = useState("");
  const [unit, setUnit] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  //   const [name, setName] = useState("");
  console.log("brand", brand, "unit", unit);
  const addItem = (e) => {
    e.preventDefault();
    db.collection("inventory").doc().set({
      name: name,
      price: price,
      unit: unit,
      brand: brand,
    });
    setName("");
    setPrice("");
    setUnit("");
    setBrand("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        Unit:
        <input
          type="number"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
