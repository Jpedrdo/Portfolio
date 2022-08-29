import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid } from "@mui/material";
import { projects } from "../data";
import { ProjectsCard } from "../components";

const useStyles = makeStyles(() => ({
  mainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleBorder: {
    borderBottom: "5px solid #6b7280",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Box name="projects" className={classes.mainBox} pt={20}>
      <Typography
        sx={{ fontSize: "2.4rem", fontWeight: "bold" }}
        className={classes.titleBorder}
      >
        Projects
      </Typography>
      <Typography pt={1.5}>Check out some of my work</Typography>
      <Grid container spacing={6} pt={4}>
        {projects.map((skill) => (
          <Grid key={skill.name} item xs={12} sm={6} md={4}>
            <ProjectsCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
