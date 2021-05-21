import { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActions } from "@material-ui/core";
import { CenterFocusStrong, Height } from "@material-ui/icons";




export default function App() {

    const useStyles = makeStyles({
        root: {
          width: 275,
          media: Height,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
          
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
  const [counter, setCounter] = useState(0);

  const changeCounter = (value) => {
    setCounter(counter + value);
  };

  useEffect(() => {
    return () => {
      console.log("Funcion de limpieza");
    };
  }, [counter]);

  return (
    <Card className={classes.root}>
     <CardContent>

      <Typography className={classes.root} color='textSecondary' variant='h5' component='h2'  gutterbuttom>Nuestros productos
      </Typography>
      Carrito: {counter} <br />
      </CardContent>
      <CardActions>
      
        <Button variant="contained" size='small' onClick={() => changeCounter(1)}>Agregar productos</Button>
        <Button variant="contained" size= 'small' onClick={() => changeCounter(-1)}>Eliminar productos</Button>
        
        </CardActions>
      </Card>
    
  );
}


