import React from 'react'
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
export default function NewNodeForm({submit, change, click}) {
  
    return (
        <div style={{marginTop:"3%"}}>
            <form onSubmit={submit}>
                <label>Date:</label>
                <input type="text" onChange={change} /><br/>
                <label>Urgency:</label>
                <select name="urgency" id="urgency" onChange={change}>
                    <option value="urgent">urgent</option>
                    <option value="canWait">it can wait</option>
                </select><br/>
                <label>Enter your Name:</label>
                <input type="text" onChange={change}/><br/>
                <label>Leave your note here: </label>
                <textarea placeholder="type your message here" onChange={change}/><br/>
                <Button variant="contained" type="submit" color="secondary">Submit</Button>
                <Button  variant="contained" type="button" color="primary" onClick={click}>exit</Button>
            </form>
            
        </div>
    )
}
