 


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import StatusMenu from './StatusMenu'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      marginBottom:'2px'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    }
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function BookingHeaders() {
  const classes = useStyles();

  return (
 
        <div className={classes.root}>

            {['Booking #', 'What Service?', 'When?', 'Who?', 'Where?', 'Status'].map((content, index)=>(

    content=='Status'?
    <Button   key={content}    >
      <StatusMenu/>
  </Button>
    :
    <Button key={content}   variant="contained" color="primary" style={{ backgroundColor: '#108E95',width:'14%' }}>
      {content} {(content=='What Service?' || content=='When?')?<ArrowDropDownIcon/>:''}
    </Button>


            ))}
            
 
        </div>
 
  );
}

