import React from 'react'
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import  ReviewTemplate from "./reviewTemplate"
// {day, hour, note, event}
export default function MonthlyReview({day, hour, note, event,visibility, add, deleteItem}) {
   
    return (
        <Grid item lg={4} style={{marginTop:"10px", marginBottom:"3%"}} >

            <h2>Monthly review</h2>
            <Paper elevation={2} >
                <ReviewTemplate day={day} hour={hour} note={note} event={event} visibility={visibility} add={add} deleteItem={deleteItem}/>
            </Paper>
        </Grid>
        
    )
}
