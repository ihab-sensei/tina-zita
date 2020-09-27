import React, { useState } from "react";
import db from "../../firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function Form() {
  // const [code, setCode] = useState("");
  // const [expireDate, setExpireDate] = useState("");
  /*const [unit, setUnit] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");*/
  //   const [name, setName] = useState("");
  // console.log("brand", brand, "unit", unit);
  const [form, setForm] = useState({ forms: ["form0"] });
  const [input, setInput] = useState([
    {
      name: "",
      price: 0,
      brand: "",
      unit: "",
      quantity: 0,
    },
  ]);
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const addNewForm = () => {
    const newForm = `form${form.forms.length}`;
    setForm((prevState) => ({ forms: prevState.forms.concat([newForm]) }));
  };

  const classes = useStyles();

  const handleSubmit = (e) => {
    alert("Success! Your inventory has been updated.");
    e.preventDefault();
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Enter Item</h3>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          {form.forms.map((el, index) => (
            <div key={el + index}>
              <TextField
                id="standard-basic"
                label="Enter Item Name:"
                type="text"
                name="name"
                value={el.name}
                onChange={(e) => handleChange(e)}
              />

              <TextField
                id="standard-basic"
                label="Enter Item Price:"
                type="number"
                name="price"
                value={el.code}
                onChange={(e) => handleChange(e)}
              />

              <TextField
                id="standard-basic"
                label="Enter Brand:"
                type="text"
                name="brand"
                value={el.brand}
                onChange={(e) => handleChange(e)}
              />

              <TextField
                id="standard-basic"
                label="Enter Quantity:"
                type="number"
                name="quantity"
                value={el.quantity}
                onChange={(e) => handleChange(e)}
              />

              <InputLabel id="label">Choose unit:</InputLabel>
              <Select
                labelId="label"
                id="select"
                value={el.unit}
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value="liters">L</MenuItem>
                <MenuItem value="grams">GR</MenuItem>
              </Select>
            </div>
          ))}
          <Button variant="contained" color="primary" onClick={addNewForm}>
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
