import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import PermanentDrawerLeft from "./components/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <HashRouter>
      <PermanentDrawerLeft />
    </HashRouter>
  );
}

export default App;
