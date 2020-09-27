import { Label } from "@material-ui/icons";
import React, {useState} from "react";

export default function Orders() {
  const [form, setForm] = useState({forms : ["form0"]});
  const [input, setInput] = useState({
    code : "",
    quantity : 0
  });
  const [quantity, setQuantity] = useState(0)

  const handleChange = (e) => {
    setInput(
      { 
        [e.target.name] : e.target.value
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  const addNewFood = () => {
    const newForm = `form${form.forms.length}`
    setForm(prevState => ({forms : prevState.forms.concat([newForm])})
      )
  }
  return (
    <div>
      <h3>Enter Order</h3>
      <div>      
        {form.forms.map((el) => <form key={el} onSubmit={handleSubmit}>
          <label>Enter Food Code: 
            <input type="text" name={"code" + el} value={input.code} onChange={(e) => handleChange(e)}></input>
          </label>
          <label>Enter Quantity: 
            <input type="text" name={"quantity" + el} value={input.quantity}  onChange={(e) => handleChange(e)}></input>
          </label>
          <button onClick={addNewFood}>Add New Food</button>
          <button>Submit</button>
      </form>)}
    </div>
    </div>
  );
}
