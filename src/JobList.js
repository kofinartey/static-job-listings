import React, { useContext } from "react";
import { FilterContext } from "./contexts/FilterContext";
import Job from "./Job";
import FilterBar from "./FilterBar";
import styles from "./styles/JobListStyles";
import { withStyles } from "@material-ui/styles";

function JobList({ classes }) {
  const { jobData, jobFilters } = useContext(FilterContext);

  function renderJob(data) {
    const job = data.map((job) => {
      let skills = [job.role, job.level, ...job.languages, ...job.tools];
      return <Job data={job} key={job.company} skills={skills} />;
    });
    return job;
  }
  // const renderJob =
  const displayJob = () => {
    if (jobFilters.length === 0) {
      return renderJob(jobData);
    } else {
      let newJobs = jobData.filter((job) => {
        let skills = [job.role, job.level, ...job.languages, ...job.tools];
        return jobFilters.every((v) => skills.includes(v));
      });
      const job = newJobs.map((job) => {
        let skills = [job.role, job.level, ...job.languages, ...job.tools];
        return <Job data={job} key={job.id} skills={skills} />;
      });
      return job;
    }
  };

  /************ MAIN COMPONENT RENDER **************/
  return (
    <div className={classes.JobList}>
      {/* render filter bar if filters have been selected */}
      {jobFilters.length > 0 && <FilterBar />}
      {displayJob()}
    </div>
  );
}

export default withStyles(styles)(JobList);
