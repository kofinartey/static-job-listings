import React from "react";
import JobList from "./JobList";
import { FilterProvider } from "./contexts/FilterContext";
import styles from "./styles/JobListingAppStyles";
import { withStyles } from "@material-ui/styles";

function JobListingApp(props) {
  const { classes } = props;

  return (
    <div className={classes.JobListingApp}>
      <header className={classes.JobListing__header}></header>
      <FilterProvider>
        <JobList />
      </FilterProvider>
    </div>
  );
}

export default withStyles(styles)(JobListingApp);
