import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import Inventory from "../components/Inventory/Inventory";

function Db() {
  const [inventory, setInventory] = useState([]);
  // const [recipe, setRecipe] = useState([]);
  const [newData, setNewData] = useState(0);

  useEffect(() => {
    //let unmounted = false;
    async function fetchData() {
      const inventoryResponse = await db.collection("inventory").get();
      const items = inventoryResponse.docs.map((item) => item.data());
      setInventory(items);
      return () => {};
    }
    fetchData();
    //return () => { unmounted = true };
  }, [newData]); // this causes re-render in every change !!

  return (
    <>
      <Inventory reFetch={setNewData} inventory={inventory} />
    </>
  );
}
export default Db;
