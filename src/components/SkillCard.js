import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardMedia: {
    margin: "auto",
    width: "80px",
    height: "80px",
  },
  cardContent: {
    textAlign: "center",
    marginTop: "0.6rem",
  },
  boxPadding: {
    padding: "0 1rem",
  },
  flexRow: {
    display: "flex",
    alignContent: "row",
    justifyContent: "space-between",
  },
}));

const SkillCard = ({ skill }) => {
  const classes = useStyles();
  const { name, img, borderColor, style } = skill;

  return (
    <Card
      className={classes.card}
      sx={{
        borderRadius: 3,
        backgroundColor: "transparent",
        boxShadow: `0px 4px 8px 0px ${borderColor}`,
      }}
    >
      <Box pt={1}>
        <CardMedia className={classes.cardMedia} image={img} style={style} />
      </Box>
      <CardContent
        sx={{ p: 1.6, "&:last-child": { pb: 1.8 } }}
        className={classes.cardContent}
      >
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
