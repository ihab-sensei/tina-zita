import React, { useState, useEffect } from "react";
import AddRecipeForm from "./AddRecipeForm";
import RecipeTable from "./RecipeTable";
import db from "../../firebaseConfig";
import "./style.css";

export default function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchRecipeData() {
      const recipeResponse = await db.collection("recipe").doc("FAL1").get();
      const recipeData = recipeResponse.data();
      // const items = inventoryResponse.docs.map((item) => item.data());
      setRecipe(recipeData.ingredients);
    }
    fetchRecipeData();
  }, []);
  return (
    <div className="recipesContainer">
      <RecipeTable recipe={recipe} />
      <AddRecipeForm />
    </div>
  );
}
