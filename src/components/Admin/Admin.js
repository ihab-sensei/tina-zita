import React from "react";
import "./style.css";
import ExpiringProducts from "./ExpiringProducts";
import ReviewContainer from "./reviewContainer";
import NoteContainer from "./NoteContainer";
import OrderInProgress from "./OrderInProgress";
import OutOfStock from "./OutOfStock";
import Card from "./Card";
import Card2 from "./Card2";

export default function Admin() {
  return (
    <div className="adminContainer">
      
      {/*Make a graph/chart for the most ordered products */}

      
      <OutOfStock />
      
      <NoteContainer />
      
    </div>
  );
}
