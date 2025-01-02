const styles = {
  desktop: {
    display: { sm: "none" }, // Hidden on small screens and up
  },

  mobile: {
    display: { sm: "none" },
  },
  main: {
    paddingBottom: { sm: "5%" },
  },
  last: {
    marginBottom: { sm: 3 },
    paddingBottom: { sm: "200px" },
  },
  grid: {
    height: "100vh",
    "& > *": {
      m: 2,
    },
  },
};

export default styles;
