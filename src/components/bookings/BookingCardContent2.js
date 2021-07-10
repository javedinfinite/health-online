import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    paddingLeft: "20%",
    textAlign: "center",
    color: theme.palette.text.primary,
    margin: "-8px",
  },

  paperIcon: {
    marginRight: "6%",
    fontSize: "x-small",
  },
}));

export default function BookingCardContent2(props) {
  const classes = useStyles();

  function FormRow() {
    return (
      // 'What Service?', 'When?', 'Who?', 'Where?', 'Status'
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
          {props.what.first == true ? (
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
          ) : (
            ""
          )}
          <div
            className={classes.paper}
            style={{ marginTop: props.what.first == true ? "25%" : "" }}
          >
            <Grid container direction="row" alignItems="center">
              <b>Covid-19 RT-PCR</b>
            </Grid>
          </div>
          {props.what.first == false && props.what.times == true ? (
            <div className={classes.paper} style={{ marginTop: "25%" }}>
              <Grid container direction="row" alignItems="center">
                <b>Covid-19 RT-PCR</b>
              </Grid>
            </div>
          ) : (
            ""
          )}
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

          {props.who.second == true ? (
            <div className={classes.paper}>
              <Grid container direction="row" alignItems="center">
                <p style={{ margin: "0px", color: "#808081" }}>DLS00002 - 2</p>
              </Grid>
              <Grid container direction="row" alignItems="center">
                <b>Omar Masri</b>
              </Grid>
              <Grid container direction="row" alignItems="center">
                <p style={{ margin: "0px", color: "#808081" }}>
                  11/08/1995 , Male
                </p>
              </Grid>
            </div>
          ) : (
            ""
          )}
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

        <Grid item xs={2}>
          {props.status.ACCEPTED == true ? (
            <div className={classes.paper}>
              <Grid
                container
                direction="row"
                alignItems="center"
                style={{ marginLeft: "28%", color: "#108E95" }}
              >
                <b>ACCEPTED</b>
              </Grid>
            </div>
          ) : (
            ""
          )}

          {props.status.PENDING == true ? (
            <div
              className={classes.paper}
              style={{ marginTop: "5%", marginLeft: "20%", color: "#EF9714" }}
            >
              <Grid container direction="row" alignItems="center">
                <b>PENDING</b>
              </Grid>
            </div>
          ) : (
            ""
          )}

          {props.status.REPORTED == true ? (
            <div
              className={classes.paper}
              style={{ marginTop: "5%", marginLeft: "20%", color: "#2C7609" }}
            >
              <Grid container direction="row" alignItems="center">
                <b>REPORTED</b>
              </Grid>
            </div>
          ) : (
            ""
          )}

          <div
            className={classes.paper}
            style={{ marginTop: "5%", marginLeft: "85%" }}
          >
            <Grid container direction="row" alignItems="center">
              <ArrowForwardIosIcon />
            </Grid>
          </div>
          {props.status.REJECTED == true ? (
            <div
              className={classes.paper}
              style={{ marginTop: "5%", marginLeft: "20%", color: "#B91212" }}
            >
              <Grid container direction="row" alignItems="center">
                <b>REJECTED</b>
              </Grid>
            </div>
          ) : (
            ""
          )}

          {props.status.PROCESSING == true ? (
            <div
              className={classes.paper}
              style={{ marginTop: "5%", marginLeft: "20%", color: "#B91212" }}
            >
              <Grid container direction="row" alignItems="center">
                <b>PROCESSING</b>
              </Grid>
            </div>
          ) : (
            ""
          )}
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
