import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import Error from './components/Error'
import PermanentDrawerLeft from './components/Sidebar'
import Bookings from './components/bookings'
 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <HashRouter>
      <PermanentDrawerLeft/>
  </HashRouter>
  );
}

export default App