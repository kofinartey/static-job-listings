const styles = {
  FilterBar: {
    backgroundColor: "white",
    borderRadius: ".5rem",
    display: "flex",
    padding: "1rem 2rem",
    position: "absolute",
    top: "-6rem",
  },
  filterTab: {
    marginRight: "1rem",
    display: "flex",
  },
  filter: {
    backgroundColor: "#F0FAFB",
    padding: ".5rem",
    borderRadius: ".2rem 0 0 .2rem ",
  },
  removeFilter: {
    backgroundColor: "#5DA5A4",
    width: " 2.5rem",
    borderRadius: "0 .2rem .2rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#303E3F",
    },
  },
};

export default styles;
