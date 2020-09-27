import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({note, author, date, urgency}) {
  const classes = useStyles();
  const handleClick = ()=>{
    
  }
  const handleDelClick = () => {

  }
//note={note} author={author} date={date} urgency={urgent}
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="h2">
          {urgency}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {author}
        </Typography>
        <Typography variant="body2" component="p">
          {note}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={handleClick()}>Add Note</Button>
        <Button size="small" color='primary' onClick={handleDelClick()}>Delete</Button>
      </CardActions>
    </Card>
  );
}