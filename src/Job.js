import React, { useState, useContext } from "react";
import { FilterContext } from "./contexts/FilterContext";
// import logos from "./images/Logos.js";
// import logo from "./images/insure.svg";
import { Divider } from "@material-ui/core";
import styles from "./styles/JobStyles.js";
import { withStyles } from "@material-ui/styles";

function Job(props) {
  const { addFilter } = useContext(FilterContext);
  const { data, classes, skills } = props;
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    setPageWidth(width);
  });
  function handleFilter(e) {
    let selectedSkill = e.target.dataset.skillName;
    addFilter(selectedSkill);
  }

  /*************** MAIN RENDER ***************/
  return (
    <div className={classes.Job}>
      {/* divide into two parts;
       *Company details
            --logo
            -job details
       *languages and tools */}

      {/* company details */}
      <div className={classes.company__details}>
        <div className={classes.Job__logo}>
          <img src={data.logo} alt={`${data.company} logo`} />
        </div>
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

      {pageWidth < 1024 && <Divider className={classes.divider} />}
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
