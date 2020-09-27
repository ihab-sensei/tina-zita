import { Label } from "@material-ui/icons";
import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [form, setForm] = useState({forms : ["form0"]});
  const [input, setInput] = useState({
    code : "",
    quantity : ""
  });
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addNewFood = (e) => {
    e.persist()
    const newForm = `form${form.forms.length}`;
    setForm((prevState) => ({ forms: prevState.forms.concat([newForm]) }));
  };
  return (
    <div style={{marginTop:"1rem"}}>
      <h3>Enter Order</h3>
      <div>      
        {form.forms.map((el) => <form className={classes.root} noValidate autoComplete="off"
         key={el} onSubmit={handleSubmit}>
         
        
          <TextField id="outlined-helperText" helperText="Enter Food Code" variant="outlined"
            name={"code" + el} value={input.code} onChange={(e) => handleChange(e)}/>
         
        
          <TextField id="outlined-helperText" helperText="Enter Quantity" variant="outlined"
           type="text" name={"quantity" + el} value={input.quantity}  onChange={(e) => handleChange(e)}/>

          <Button onClick={addNewFood} variant="contained" color="primary">Add New Food</Button>
          <Button variant="contained" color="secondary">Submit</Button>
      </form>)}
    </div>
    </div>
  );
}
