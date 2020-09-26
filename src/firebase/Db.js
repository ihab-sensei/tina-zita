import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";

function Db() {
  const [inventory, setInventory] = useState([]);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const inventoryResponse = await db.collection("inventory").get();
      const items = inventoryResponse.docs.map((item) => item.data());
      setInventory(items);
      console.log(inventory);

      const recipeResponse = await db.collection("recipe").get();
      const recipes = recipeResponse.docs.map((recipe) => recipe.data());
      setRecipe(recipes);
    }
    fetchData();
  }, [inventory, recipe]);
  return (
    <ul>
      {inventory.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
}
export default Db;
