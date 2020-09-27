import React, { useState } from "react";
import db from "../../firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
// import FormControl from '@material-ui/core/FormControl';

export default function BillsForm() {
  const [forms, setForms] = useState([
    {
      name: "",
      unitPrice: 0,
      quantity: 0,
      totalPrice: 0,
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
    alert("Success! Your bills list has been updated.");
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
  const addNewItem = () => {
    setForms([
      ...forms,
      { name: "", unitPrice: 0, quantity: 0, totalPrice: 0 },
    ]);
  };
  const classes = useStyles();
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Enter Bill</h3>
      <div>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          {forms.map((el, index) => (
            <div key={el + index}>
              <TextField id="standard-basic" label="Enter Item Name:">
                <input
                  type="text"
                  name="name"
                  value={el.name}
                  onChange={(e) => handleChange(e, index, "name")}
                ></input>{" "}
              </TextField>
              <TextField id="standard-basic" label="Enter Unit Price Code:">
                {" "}
                <input
                  type="text"
                  name="unitPrice"
                  value={el.unitPrice}
                  onChange={(e) => handleChange(e, index, "unitPrice")}
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

              {/* {<Select
                  labelId="label"
                  id="select"
                  value={el.totalPrice}
                  onChange={(e) => handleChange(e, index, "totalPrice")}
                >
                  <MenuItem value="liters">L</MenuItem>
                  <MenuItem value="grams">GR</MenuItem>
                </Select>} */}

              {/* <select
                  value={el.unit}
                  onChange={(e) => handleChange(e, index, "unit")}
                >
                  <option value="liters">L</option>
                  <option value="grams">GR</option>
                </select> */}
            </div>
          ))}
          <Button variant="contained" color="primary" onClick={addNewItem}>
            Add New Item
          </Button>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
