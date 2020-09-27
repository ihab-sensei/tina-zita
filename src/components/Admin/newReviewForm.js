import React from 'react'
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
export default function newReviewForm({submit, handleUserInput, click}) {
    //submit={handleSubmit} changeInput={handleUserInput}
    return (
        <div>
            <form onSubmit={submit}>
                <label>Day:</label>
                <input helperText="Enter Quantity" type="text" onChange={(e)=>handleUserInput(e,"day")} /><br/>
                <label>Hour:</label>
                <input type="text" onChange={(e) =>handleUserInput(e,"hour")}/><br/>
                <label>Enter event:</label>
                <input type="text" onChange={(e)=>handleUserInput(e,"event")}/><br/>
                <label>Leave your note here: </label>
                <textarea placeholder="type your message here" onChange={(e)=>handleUserInput(e,"note")}/><br/>
                <Button  variant="contained" type="submit"color="secondary">Submit</Button>
                <Button  variant="contained" type="button" color="primary" onClick={click}>exit</Button>
            </form>
        </div>
    )
}