import React from "react";
import JobsList from "./JobsList";
import styles from "./styles/JobListingAppStyles";
import { withStyles } from "@material-ui/styles";

function JobListingApp() {
  return (
    <div>
      <h1>JOB LISTING APP</h1>
      <JobsList />
    </div>
  );
}

export default withStyles(styles)(JobListingApp);
