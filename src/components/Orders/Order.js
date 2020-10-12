import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// import { Alert, AlertTitle } from "@material-ui/lab";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  root2: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Orders() {
  const classes = useStyles();

  // const [alert, setAlert] = useState(false);
  const [form, setForm] = useState({ forms: ["form0"] });
  const [input, setInput] = useState({
    code: "",
    quantity: 0,
  });
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success! The order has been added.");
    // setAlert(true);
  };
  const addNewFood = (e) => {
    //e.persist();
    const newForm = `form${form.forms.length}`;
    setForm((prevState) => ({ forms: prevState.forms.concat([newForm]) }));
  };
  return (
    <div className="ordersContainer">
      <h3>Enter Order</h3>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          {form.forms.map((el, index) => (
            <div key={el + index}>
              <TextField
                id="outlined-helperText"
                helperText="Enter Food Code"
                variant="outlined"
                name={"code" + el}
                value={el.code}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id="outlined-helperText"
                helperText="Enter Quantity"
                variant="outlined"
                type="number"
                InputProps={{
                  inputProps: {
                    max: 100,
                    min: 1,
                  },
                }}
                name={"quantity" + el}
                value={el.quantity}
                onChange={(e) => handleChange(e)}
              />
            </div>
          ))}
          <Button
            style={{ margin: "0px 10px" }}
            onClick={addNewFood}
            variant="contained"
            color="primary"
          >
            Add New Food
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => handleSubmit(e)} //check this later
          >
            Submit
          </Button>
        </form>
        {/* {alert && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Success
          </Alert>
        )} */}
      </div>
    </div>
  );
}
