import React from "react";
// import logos from "./images/Logos.js";
import styles from "./styles/JobStyles.js";
import { withStyles } from "@material-ui/styles";

function Job(props) {
  const { data, classes, skills, addFilter } = props;

  function handleFilter(e) {
    let selectedSkill = e.target.dataset.skillName;
    addFilter(selectedSkill);
  }

  /*************** MAIN REND ***************/
  return (
    <div className={classes.Job}>
      {/* divide into two parts;
       *Company details
            --logo
            -job details
       *languages and tools */}

      {/* company details */}
      <div className={classes.company__details}>
        <div className={classes.Job__logo}></div>
        <div className={classes.Job__details}>
          <div className={classes.Job__company}>
            <p>{data.company}</p>
            {data.new && <p className={classes.recent}>new</p>}
            {data.featured && (
              <p className={`${classes.recent} ${classes.featured}`}>
                featured
              </p>
            )}
          </div>
          <p className={classes.position}>{data.position}</p>

          <div className={classes.minorDetails}>
            <p>{data.postedAt}</p>
            <p>{data.contract}</p>
            <p>{data.location}</p>
          </div>
        </div>
      </div>

      {/* languages and tools */}
      <div className={classes.skills}>
        {skills.map((skill) => (
          <button onClick={handleFilter} key={skill} data-skill-name={skill}>
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
export default withStyles(styles)(Job);
