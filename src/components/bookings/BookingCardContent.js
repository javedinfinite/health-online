import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    paddingLeft: "20%",
    margin: "-8px",
    textAlign: "center",
    color: theme.palette.text.primary,
  },

  paperIcon: {
    marginRight: "6%",
    fontSize: "x-small",
  },
}));

export default function BookingCardContent() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <div className={classes.paper}>
            <Grid container direction="row" alignItems="center">
              <p className={classes.paperIcon}>#</p> <b>DLS00001</b>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <CalendarTodayIcon className={classes.paperIcon} /> 15/03/21
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={classes.paper}>
            <Grid container direction="row" alignItems="center">
              <b>DLS00001</b>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{ color: "#12B0B9" }}
            >
              Fast Track
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={classes.paper}>
            <Grid container direction="row" alignItems="center">
              <CalendarTodayIcon className={classes.paperIcon} /> 15/03/21
            </Grid>

            <Grid container direction="row" alignItems="center">
              <QueryBuilderIcon className={classes.paperIcon} /> 10 : 30 PM
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={classes.paper}>
            <Grid container direction="row" alignItems="center">
              <p style={{ margin: "0px", color: "#808081" }}>DLS00001</p>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <b>Samer Masri</b>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <p style={{ margin: "0px", color: "#808081" }}>
                11/08/1995 , Male
              </p>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className={classes.paper}>
            <Grid container direction="row" alignItems="center">
              <b>Abu Dhabi</b>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <p style={{ margin: "0px" }}>Al Reem Island</p>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <p style={{ margin: "0px" }}>123, Sea View Tower</p>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <p style={{ margin: "0px", color: "#808081" }}>Near Bridges</p>
            </Grid>
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
