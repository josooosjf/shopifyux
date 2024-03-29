import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./SingleMovie.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SingleMovie({ movie, is_disabled, onClick }) {
  const classes = useStyles();

  return (
    <li className={"Single-Movie"}>
      <h3 className={"Movie-Info"}>
        {movie.Title}({movie.Year})
      </h3>
      <Button
        variant="outlined"
        color="green"
        size="small"
        className={classes.button}
        startIcon={<FavoriteBorderIcon />}
        onClick={onClick}
        disabled={is_disabled}
      >
        Nominate
      </Button>
    </li>
  );
}
