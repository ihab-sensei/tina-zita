import React, { useState } from "react";
import db from "../../firebaseConfig";

export default function Recipes() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [unit, setUnit] = useState([]);

  const addRecipe = () => {
    db.collection("recipe").doc(recipeName).set({
      ingredients: ingredients,
      quantity: quantity,
      unit: unit,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe();
  };

  const addRecipeIngredient = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Ingredients:
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          Unit:
          <input
            type="number"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </label>
      </form>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name: {/*falafel*/}
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
          {addRecipeIngredient()}
          <button onClick={addRecipeIngredient}>Add Ingredient</button>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}
