import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActions, CardMedia } from "@material-ui/core";
import { Autorenew, CenterFocusStrong, Height } from "@material-ui/icons";

export default function App() {
  const useStyles = makeStyles({
    root: {
      width: 275,
      media: Height,
      margin: 'auto', 
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
        height:0,
        paddingTop:'56%',
    }
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}></span>;

  const [stock, setStock] = useState(1);
  

  const changeCounter = (value) => {
    if (stock + value > -1) {
      setStock(stock + value);
    }
  };

  useEffect(() => {
    return () => {};
  }, [stock]);

  return (
    <>
      <Card className={classes.root} variant="outlined">
        
        <CardMedia className={classes.media} image="https://www.hola.com/imagenes/cocina/recetas/20200910175033/muffins-centeno-chocolate/0-863-761/muffins-adobe-m.jpg"
        title="muffin" />
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
          Cantidad productos: {stock} <br />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => changeCounter(1)}
          >
            Agregar productos
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => changeCounter(-1)}
          >
            Eliminar productos
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
