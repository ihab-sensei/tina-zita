import React, { useState } from "react";
import db from "../../firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
// import FormControl from '@material-ui/core/FormControl';

export default function Recipes() {
  // const [recipeName, setRecipeName] = useState("");
  // const [ingredients, setIngredients] = useState([]);
  // const [quantity, setQuantity] = useState([]);
  // const [unit, setUnit] = useState([]);
  const [forms, setForms] = useState([
    {
      ingredientName: "",
      code: "",
      quantity: 0,
      unit: "",
    },
  ]);

  // const addRecipe = () => {
  //   console.log(forms.code);
  //   db.collection("recipe").doc().set({
  //     ingredientName: forms.ingredientName,
  //     code: forms.code,
  //     quantity: forms.quantity,
  //     unit: forms.unit,
  //   });
  // };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // addRecipe();
  };
  const handleChange = (e, index, name) => {
    // [e.target.name]: e.target.value,
    e.persist();
    setForms((prevForms) => {
      const newForms = [...prevForms];
      newForms[index][name] = e.target.value;
      return newForms;
    });
  };
  const addNewForm = () => {
    setForms([
      ...forms,
      { ingredientName: "", code: "", quantity: 0, unit: "" },
    ]);
  };
  const classes = useStyles();
  return (
    <div>
      <h3>Enter Order</h3>
      <div>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          {forms.map((el, index) => (
            <>
              <div key={el + index}>
                <TextField id="standard-basic" label="Enter Ingredient Name:">
                  <input
                    type="text"
                    name="ingredientName"
                    value={el.ingredientName}
                    onChange={(e) => handleChange(e, index, "ingredientName")}
                  ></input>{" "}
                </TextField>
                <TextField id="standard-basic" label="Enter Ingredient Code:">
                  {" "}
                  <input
                    type="text"
                    name="code"
                    value={el.code}
                    onChange={(e) => handleChange(e, index, "code")}
                  ></input>
                </TextField>
                <TextField id="standard-basic" label="Enter Quantity:">
                  {" "}
                  <input
                    type="number"
                    name="quantity"
                    value={el.quantity}
                    onChange={(e) => handleChange(e, index, "quantity")}
                  ></input>
                </TextField>
                <InputLabel id="label">Choose unit:</InputLabel>
                <Select
                  labelId="label"
                  id="select"
                  value={el.unit}
                  onChange={(e) => handleChange(e, index, "unit")}
                >
                  <MenuItem value="liters">L</MenuItem>
                  <MenuItem value="grams">GR</MenuItem>
                </Select>

                {/* <select
                  value={el.unit}
                  onChange={(e) => handleChange(e, index, "unit")}
                >
                  <option value="liters">L</option>
                  <option value="grams">GR</option>
                </select> */}
              </div>
            </>
          ))}
          <button onClick={addNewForm}>Add New Recipe</button>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
