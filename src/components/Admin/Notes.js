import React from 'react'
import SimpleCard from "./noteTemplate"
import Grid from '@material-ui/core/Grid';

export default function Notes() {
    const note = "We need to add vegan dishes"
    const author = "Aişe"
    const date = "25/08/2020"
    const urgent = "urgent"
    return (
        <Grid style={{marginTop:"10px"}} item xs={3}>
            {/* map through each not eto show in admin */}
            <SimpleCard  note={note} author={author} date={date} urgency={urgent}/>
        </Grid>
    )
}
