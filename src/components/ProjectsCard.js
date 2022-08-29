import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  technologies: {
    color: "#6b7280",
  },
  buttonText: {
    textTransform: "none",
    color: "#a5a5a5",
    "&:hover": {
      opacity: 0.8,
    },
  },
  buttonOff: {
    textTransform: "none",
    opacity: 0.5,
    color: "#6e6e6e",
  },
}));

const ProjectsCard = ({ skill }) => {
  const classes = useStyles();
  const { name, img, technologies, demoLink, codeLink } = skill;

  const redirect = (link) => window.open(link, "_blank");

  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "transparent",
        boxShadow: `0px 4px 8px 0px #454f5d`,
      }}
    >
      <CardMedia component="img" height="190" image={img} alt="green iguana" />
      <CardContent>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography className={classes.technologies} pt={1}>
          {technologies}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          disabled={!demoLink}
          onClick={() => redirect(demoLink)}
        >
          <Typography
            className={!demoLink ? classes.buttonOff : classes.buttonText}
          >
            Demo
          </Typography>
        </Button>
        <Button size="small" onClick={() => redirect(codeLink)}>
          <Typography className={classes.buttonText}>Code</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectsCard;
