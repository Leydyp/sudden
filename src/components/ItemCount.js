import React from "react";
import { useState} from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActions, CardMedia } from "@material-ui/core";
import { Height } from "@material-ui/icons";


export const ProductContainer = ({ initial, stock}) => {
  const [error, setError] = useState("");

  const [stockRequired, setStockRequired] = useState("initial");
  const onAdd = () => {
    if (stock >= setStockRequired + 1) {
      setStockRequired(stockRequired + 1);
      setError("");
    } else {
      setError("no hay mas stock");
    }
  };

  const useStyles = makeStyles({
    root: {
      width: 275,
      media: Height,
      margin: "auto",
    },
    bullet: {
      display: "inline",
      marginLeft: "auto",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 0,
      paddingTop: "56%",
    },
  });
  const classes = useStyles();
  //Contador que me sirve para sumar y restar
  const [counter, setCounter] = useState(initial);

  //Cambio del contador

  const changeCounter = (value) => {
    if (counter + value > -1) {
      setCounter(counter + value);
    }
  };

  return (
    <>
  
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.media}
          image="https://www.hola.com/imagenes/cocina/recetas/20200910175033/muffins-centeno-chocolate/0-863-761/muffins-adobe-m.jpg"
          title="muffin"
        />
        <CardContent>
          <Typography
            className={classes.root}
            color="textSecondary"
            variant="h5"
            component="h2"
            gutterbuttom
          >
            Muffin Frambuesa
          </Typography>
          Cantidad productos: {counter} 
          <br /> {error}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => changeCounter(+1)}
          >
            {onAdd}+
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => changeCounter(-1)}
          >
            {onAdd}-
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
