import React from "react";
import { meDrawn } from "../imgs";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    height: "90vh",
    minHeight: "800px",
    alignItems: "center",
    justifyContent: "center",
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      width: "80%",
    },
  },
  drawn: {
    position: "relative",
    display: "flex",
    animation: "$MoveUpDown 8s infinite",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      width: "70%",
    },
  },
  resum: {
    color: "#6b7280",
  },
  button: {
    background: "linear-gradient(90deg, #96358a 1%, #5a30b2 91%)",
    color: "#fff",
    fontWeight: "normal",
    width: 170,
    height: 40.5,
    "&:hover": {
      opacity: 0.8,
    },
  },
  buttonText: {
    textTransform: "none",
    color: "#fff",
  },
  "@keyframes MoveUpDown": {
    "0%, 100%": {
      bottom: 0,
    },
    "60%": {
      bottom: "80px",
    },
  },
  img: {
    objectFit: "cover",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box
      name="home"
      className={classes.mainBox}
      sx={{
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box className={classes.infos}>
        <Box pb={1}>
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2rem",
                md: "2.8vw",
              },
              fontWeight: "bold",
            }}
          >
            Hi! I'm João Pedro
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2rem",
                md: "2.8vw",
              },
              fontWeight: "bold",
            }}
          >
            Front-End Developer
          </Typography>
        </Box>
        <Box pb={3}>
          <Typography className={classes.resum}>
            With 3 years of experience in JavaScript, React, React Native and
            more.
          </Typography>
          <Typography className={classes.resum}>
            I always try to improve my skills and use design patterns.
          </Typography>
        </Box>
        <Link to="projects" smooth offset={75} duration={500}>
          <Button variant="contained" className={classes.button}>
            <Typography className={classes.buttonText}>Projects</Typography>
          </Button>
        </Link>
      </Box>
      <Box className={classes.drawn}>
        <img src={meDrawn} alt="meDrawn" className={classes.img} />
      </Box>
    </Box>
  );
};

export default Home;
