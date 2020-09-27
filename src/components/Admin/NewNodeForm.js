import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

//   <TextField
//                 id="standard-basic"
//                 label="Enter Ingredient Name:"
//                 value={el.ingredientName}
//                 onChange={(e) => handleChange(e, index, "ingredientName")}
//               ></TextField>

export default function NewNodeForm({ submit, click }) {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "1rem" }}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={submit}
      >
        <TextField id="standard-basic" label="Date:" value=""></TextField>
        <br />

        <InputLabel id="label">Urgency:</InputLabel>
        <Select labelId="label" id="select" value="">
          <MenuItem value="urgent">Urgent</MenuItem>
          <MenuItem value="canWait">It can wait</MenuItem>
        </Select>
        <br />
        <TextField
          id="standard-basic"
          label="Enter your Name:"
          value=""
        ></TextField>
        <br />
        <TextField
          id="standard-basic"
          label="Leave your note here:"
          value=""
        ></TextField>
        <br />
        <Button variant="contained" type="submit" color="secondary">
          Submit
        </Button>
        <Button
          variant="contained"
          type="button"
          color="primary"
          onClick={click}
        >
          exit
        </Button>
      </form>
    </div>
  );
}
