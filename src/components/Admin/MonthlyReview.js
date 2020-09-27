import React from 'react'
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import  ReviewTemplate from "./reviewTemplate"
// {day, hour, note, event}
export default function MonthlyReview({day, hour, note, event}) {
   
    return (
        <Grid lg={4} style={{marginTop:"10px"}} >
            <h2>Monthly review</h2>
            <Paper elevation={2} >
                <ReviewTemplate day={day} hour={hour} note={note} event={event} />
            </Paper>
        </Grid>
        
    )
}
