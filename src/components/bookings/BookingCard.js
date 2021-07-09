import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BookingCardContent from './BookingCardContent'
import BookingCardContent2 from './BookingCardContent2'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius:'15px 15px 0px 0px',
  },
  root2: {
    minWidth: 275,
    marginTop:'4px'
  },
 
  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 8,
  },
});

export default function BookingCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
    <BookingCardContent/>
    
      </CardContent>
    </Card>

    <Card className={classes.root2}>
      <CardContent>
      <BookingCardContent2 who={{'second':true }} what={{'first':true, 'times':false}}  status={{'ACCEPTED':true, 'REJECTED':true, 'PENDING':false, 'REPORTED':false, 'PROCESSING':false}}/>
    
      </CardContent>
    </Card>

    <Card className={classes.root2}>
      <CardContent>
      <BookingCardContent2 who={{'second':false }} what={{'first':false, 'times':false}} status={{'ACCEPTED':false, 'REJECTED':false, 'PENDING':true, 'REPORTED':false, 'PROCESSING':false}}/>
    
      </CardContent>
    </Card>

    <Card className={classes.root2}>
      <CardContent>
      <BookingCardContent2 who={{'second':true}} what={{'first':false, 'times':true}}  status={{'ACCEPTED':false, 'REJECTED':false, 'PENDING':false, 'REPORTED':true, 'PROCESSING':true}}/>
    
      </CardContent>
    </Card>

    <Card  style={{marginTop:'4px',borderRadius:'0px 0px 15px 15px',}}>
      <CardContent style={{padding:'10px' }}>
    
      </CardContent>
    </Card>
    </>
  );
}
