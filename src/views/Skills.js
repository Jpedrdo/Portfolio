import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid } from "@mui/material";
import { skills } from "../data";
import { SkillCard } from "../components";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      marginTop: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
  titleBorder: {
    borderBottom: "5px solid #6b7280",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Box name="skills" className={classes.mainBox}>
      <Typography
        sx={{ fontSize: "2.4rem", fontWeight: "bold" }}
        className={classes.titleBorder}
      >
        Skills
      </Typography>
      <Typography pt={1.5}>
        These are the technologies I've worked with
      </Typography>
      <Grid container spacing={6} pt={4}>
        {skills.map((skill) => (
          <Grid key={skill.name} item xs={12} sm={6} md={4}>
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
