import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Bookings from "./bookings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    
  
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
     
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius:'30px 0px 0px 30px',
    marginLeft:'10px'
  },
  drawerPaperClicked: {
    width: drawerWidth,
    backgroundColor: "#FFFFFF",
    color: "#12B0B9",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingTop:'0px',
    margin:'0px'
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [sideContent, setSideContent] = useState('Home')

  const test = (setSelected) =>{
    setSideContent(setSelected)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper:  classes.drawerPaper,
        }}
        anchor="left"
      >
 
        {/* <div className={classes.toolbar} /> */}
        {/* <Divider /> */}
        <List>
          {[
            { title: "DarDoc", path: "#" },
            { title: "Home", path: "/" },
            { title: "Total Bookings", path: "/bookings" },
            { title: "Manage Bookings", path: "/managebookings" },
            { title: "Nurse Profile", path: "/nurseprofile" },
            { title: "Accounting", path: "/accounting" },
            { title: "Analytics", path: "/analytics" },
            { title: "Support", path: "/support" },
            { title: "Logout", path: "/logout" }
         
          ].map((object, index) => (
            <ListItem 
              button
              key={object.path}
              component={Link}
              to={object.path}
              onClick={()=>test(object.title)}
            >
        
              <ListItemText 
              style={{color: sideContent==object.title? '#12B0B9':'' || object.title=='Analytics'? '#8291AC':'',
                  marginTop: object.title=='Logout'? '40%':'8%',
                  
                }} 
              primary={
                object.title=='DarDoc'?
                <span style={{fontSize:object.title=='DarDoc'?'xx-large':''}}>
                  <b style={{color:'#12B0B9'}}>Dar</b><b style={{color:'#108E95'}}>Doc</b>
                </span>
                :
                <b>{object.title}</b>
              
              } />
              
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookings" component={Bookings} />

          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}
