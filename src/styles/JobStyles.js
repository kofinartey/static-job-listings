const styles = {
  Job: {
    height: "100%",
    backgroundColor: "white",
    padding: "2rem 2.5rem",
    margin: "1.5rem 0",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 31px 20px -20px #D7EBEC",
  },
  company__details: {
    display: "flex",
  },
  Job__logo: {
    width: "5.5rem",
    height: "5.5rem",
    borderRadius: "50%",
    backgroundColor: "lightgrey",
  },
  Job__details: {
    height: "5.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: "1rem",
    padding: ".4rem 0",
  },
  position: {
    cursor: "pointer",
    transition: "all .3s ease-in-out",
    "&:hover": {
      color: "#5DA5A4",
    },
  },
  Job__company: {
    color: "#5DA5A4",
    fontSize: ".8rem",
    display: "flex",
    alignItems: "center",
  },
  recent: {
    fontSize: ".6rem",
    textTransform: "uppercase",
    backgroundColor: "#5DA5A4",
    color: "white",
    padding: ".5rem .8rem 0.3rem .8rem",
    marginLeft: ".5rem",
    borderRadius: "1rem",
  },
  featured: {
    backgroundColor: "black",
  },

  minorDetails: {
    color: "#9B9FA0",
    fontWeight: "400",
    fontSize: ".8rem",
    display: "flex",
    "& p": {
      marginRight: "1rem",
    },
  },
  skills: {
    // backgroundColor: "red",
    "& button": {
      fontWeight: "600",
      color: "#5DA5A4",
      backgroundColor: "#F0FAFB",
      padding: ".5rem",
      border: "none",
      borderRadius: ".3rem",
      marginRight: "1rem",
      cursor: "pointer",
      transition: "all .3s ease-in-out",
      "&:hover": {
        color: "white",
        backgroundColor: "#5DA5A4",
      },
    },
  },
};

export default styles;
