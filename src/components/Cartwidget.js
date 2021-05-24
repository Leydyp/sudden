import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Cartwidget() {
    return (
      <div>
            <IconButton aria-label="delete" color= 'danger'>
          <AddShoppingCartIcon/>
        </IconButton>
      </div>
    );
  }
  export default Cartwidget;

