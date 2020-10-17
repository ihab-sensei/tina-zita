import React, { useState } from "react";
import db from "../../firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function Form({ inventory, reFetch }) {
  const [forms, setForms] = useState([
    {
      name: "",
      price: 0,
      brand: "",
      unit: "",
      quantity: 0,
      category: "",
      code: "",
    },
  ]);
  {
    const useStyles = makeStyles((theme) => ({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    }));

    // const addRecipe = () => {
    //   db.collection("recipe")
    //     .doc()
    //     .set({
    //       ingredients: [...forms],
    //       recipeName: "Falafel",
    //     });
    // };

    const addNewInventoryItem = () => {
      db.collection("inventory")
        .doc(forms[0].name)
        .set({
          ...forms[0],
        });
    };

    const addNewForm = () => {
      setForms([
        ...forms,
        {
          name: "",
          price: 0,
          quantity: 0,
          unit: "",
          brand: "",
          category: "",
        },
      ]);
    };

    const handleChange = (e, index, name) => {
      e.persist();
      setForms((prevForms) => {
        const newForms = [...prevForms];
        console.log(newForms);
        newForms[index][name] = e.target.value;
        return newForms;
      });
    };

    const classes = useStyles();

    const handleSubmit = (e) => {
      alert("Success! Your inventory has been updated.");
      addNewInventoryItem();
      reFetch(1);
    };

    return (
      <div style={{ marginTop: "1rem" }}>
        <h3>Enter Item</h3>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              {forms.map((el, index) => (
                <div key={el + index}>
                  <TextField
                    id="standard-basic"
                    label="Enter Item Name"
                    type="text"
                    name="name"
                    value={el.name}
                    onChange={(e) => handleChange(e, index, "name")}
                  />

                  <TextField
                    id="standard-basic"
                    label="Enter Item Price"
                    type="number"
                    name="price"
                    value={el.price}
                    onChange={(e) => handleChange(e, index, "price")}
                  />

                  <TextField
                    id="standard-basic"
                    label="Enter Brand"
                    type="text"
                    name="brand"
                    value={el.brand}
                    onChange={(e) => handleChange(e, index, "brand")}
                  />

                  <TextField
                    id="standard-basic"
                    label="Enter Category"
                    type="text"
                    name="category"
                    value={el.category}
                    onChange={(e) => handleChange(e, index, "category")}
                  />
                  
                  <TextField
                    id="standard-basic"
                    label="Enter Quantity"
                    type="number"
                    name="quantity"
                    value={el.quantity}
                    onChange={(e) => handleChange(e, index, "quantity")}
                  />

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
                </div>
              ))}
            </div>
            <Button variant="contained" color="primary" onClick={addNewForm}>
              Add New Item
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
