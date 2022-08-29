import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, TextField, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleBorder: {
    borderBottom: "5px solid #6b7280",
  },
  formBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  containerButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#ffffffa1 !important",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box name="contact">
      <Box pt={20}>
        <Box className={classes.container}>
          <Typography
            sx={{ fontSize: "2.4rem", fontWeight: "bold" }}
            className={classes.titleBorder}
          >
            Contact
          </Typography>
          <Typography pt={1.5}>Submit the form below to reach me</Typography>
        </Box>
        <Box className={classes.formBox}>
          <form
            className={classes.form}
            action="https://getform.io/f/d52494f2-2cb7-4ab4-8100-10b4caaee0b5"
            method="POST"
            target="_blank"
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              required
              sx={{ marginTop: "25px" }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              required
              sx={{ marginTop: "20px" }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              name="message"
              label="Enter your message"
              variant="outlined"
              required
              multiline
              rows={5}
              sx={{ marginTop: "20px" }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <Box className={classes.containerButton} pt={7}>
              <Button type="submit" className={classes.button}>
                Let's Talk
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
