import React from "react";
import JobList from "./JobList";
import data from "./data.json";
import styles from "./styles/JobListingAppStyles";
import { withStyles } from "@material-ui/styles";

function JobListingApp(props) {
  const { classes } = props;

  return (
    <div className={classes.JobListingApp}>
      <header className={classes.JobListing__header}></header>
      <JobList jobData={data} />
    </div>
  );
}

export default withStyles(styles)(JobListingApp);
