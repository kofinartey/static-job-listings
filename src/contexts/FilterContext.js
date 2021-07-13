import React, { useState, createContext } from "react";
import jobData from "../data.json";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
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
  const clearFilters = () => {
    setJobFilters([]);
  };

  const value = {
    jobData,
    jobFilters,
    setJobFilters,
    addFilter,
    removeFilter,
    clearFilters,
  };
  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
};
