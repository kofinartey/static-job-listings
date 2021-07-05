import React, { useState } from "react";
import Job from "./Job";
import FilterBar from "./FilterBar";
import styles from "./styles/JobListStyles";
import { withStyles } from "@material-ui/styles";

function JobList({ classes, jobData }) {
  const [jobFilters, setJobFilters] = useState([]);

  function addFilter(newFilter) {
    if (jobFilters.length === 0) {
      setJobFilters([newFilter]);
    } else if (jobFilters.indexOf(newFilter) === -1) {
      setJobFilters([...jobFilters, newFilter]);
    }
  }

  const removeFilter = (filterToRemove) => {
    let newFilterList = jobFilters.filter(
      (filter) => filter !== filterToRemove
    );
    setJobFilters(newFilterList);
  };

  function renderJob(data) {
    const job = data.map((job) => {
      let skills = [job.role, job.level, ...job.languages, ...job.tools];
      return (
        <div>
          <Job data={job} key={job.id} addFilter={addFilter} skills={skills} />
        </div>
      );
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
        //from stackOverflow. this compares the
        return jobFilters.every((v) => skills.includes(v));
      });
      const job = newJobs.map((job) => {
        let skills = [job.role, job.level, ...job.languages, ...job.tools];
        return (
          <div>
            <Job
              data={job}
              key={job.id}
              addFilter={addFilter}
              skills={skills}
            />
          </div>
        );
      });
      return job;
    }
  };

  /************ MAIN COMPONENT RENDER **************/
  return (
    <div className={classes.JobList}>
      {/* render filter bar if filters have been selected */}
      {jobFilters.length > 0 && (
        <FilterBar filters={jobFilters} removeFilter={removeFilter} />
      )}
      {displayJob()}
    </div>
  );
}

export default withStyles(styles)(JobList);
