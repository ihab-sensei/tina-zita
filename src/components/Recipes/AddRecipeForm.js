import React, { useState } from "react";
import db from "../../firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
// import FormControl from '@material-ui/core/FormControl';

export default function Recipes() {
  const [forms, setForms] = useState([
    {
      ingredientName: "",
      code: "",
      quantity: 0,
      unit: "",
    },
  ]);
  console.log(forms);
  const addRecipe = () => {
    db.collection("recipe")
      .doc()
      .set({
        ingredients: [...forms],
        recipeName: "Falafel",
      });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("hello");
    alert("Success! Your recipe list has been updated.");
    addRecipe();
  };
  const handleChange = (e, index, name) => {
    console.log("hello");
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
    <div style={{ marginTop: "1rem" }}>
      <h3>Enter Order</h3>
      <div>
        <form
          // onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          {forms.map((el, index) => (
            <div key={el + index}>
              <TextField
                id="standard-basic"
                label="Enter Ingredient Name:"
                value={el.ingredientName}
                onChange={(e) => handleChange(e, index, "ingredientName")}
              ></TextField>
              <TextField
                id="standard-basic"
                label="Enter Ingredient Code:"
                value={el.code}
                onChange={(e) => handleChange(e, index, "code")}
              >
                {" "}
              </TextField>
              <TextField
                id="standard-basic"
                label="Enter Quantity:"
                value={el.quantity}
                onChange={(e) => handleChange(e, index, "quantity")}
              >
                {" "}
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
          ))}
          <Button variant="contained" color="primary" onClick={addNewForm}>
            Add New Ingredient
          </Button>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
