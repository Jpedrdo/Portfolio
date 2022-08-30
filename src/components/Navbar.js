import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { firstLetterUpperCase } from "../utils";
import { headerLinks } from "../data";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  textLink: {
    textTransform: "none",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  mainBox: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Box className={classes.mainBox}>
            <Typography
              variant="h1"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Great Vibes",
                color: "#fff",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              João Pedro
            </Typography>
            {headerLinks.map(({ id, link, offset }) => (
              <Link
                key={id}
                to={link}
                smooth
                offset={offset}
                duration={500}
                spy={true}
                containerId="containerElement"
              >
                <Button
                  sx={{
                    color: "#6b7280",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <Typography variant="h5" className={classes.textLink}>
                    {firstLetterUpperCase(link)}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
