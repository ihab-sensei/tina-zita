import React from "react";
import "./style.css";
import ExpiringProducts from "./ExpiringProducts";
import MonthlyReview from "./MonthlyReview";
import Notes from "./Notes";
import OrderInProgress from "./OrderInProgress";
import OutOfStock from "./OutOfStock";
import Card from "./Card"
import Card2 from "./Card2"

export default function Admin() {
  return (
    <div className="adminContainer">
      <div>
        <h1 style={{textAlign:"center",
      margin: "10px 0"}}>Trending Recipes</h1>
        <div style={{display:"flex",
      justifyContent: "space-around"}}>
        <Card />
        <Card2 />
        </div>
      </div>
      
      <ExpiringProducts />
      <OutOfStock />
     <OrderInProgress />
      <Notes />
      <MonthlyReview />
    </div>
  );
}
