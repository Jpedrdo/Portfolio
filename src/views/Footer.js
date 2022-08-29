import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  textFooter: {
    color: "#6b7280",
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box pt={0.5} pb={2.5}>
      <Typography className={classes.textFooter}>
        Coded by João Pedro
      </Typography>
    </Box>
  );
};

export default Footer;
