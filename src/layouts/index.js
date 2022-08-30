import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Home, Skills, Projects, Contact, Footer } from "../views";
import { Navbar } from "../components";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    margin: "0 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    margin: "0 auto",
    overflow: "auto",
  },
  about: {
    maxWidth: "1150px",
    margin: "0 auto",
    marginBottom: "10rem",
    padding: "0rem 2rem",
  },
  textFooter: {
    color: "#6b7280",
    textAlign: "center",
  },
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content} id="containerElement">
        <Navbar />
        <Home />
        <Box className={classes.about}>
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
