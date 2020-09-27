import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import Inventory from "../components/Inventory/Inventory";
import Recipes from "../components/Recipes/Recipes";

function Db() {
  const [inventory, setInventory] = useState([]);
  // const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const inventoryResponse = await db.collection("inventory").get();
      const items = inventoryResponse.docs.map((item) => item.data());
      setInventory(items);
      // console.log(inventoryResponse);

      // const recipeResponse = await db.collection("recipe").get();
      // const recipes = recipeResponse.docs.map((recipe) => recipe.data());
      // setRecipe(recipes);
    }
    fetchData();
  }, []);
  console.log("hello");

  return (
    <>
      <Inventory inventory={inventory} />
    </>
  );
}
export default Db;
