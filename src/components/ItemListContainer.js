import React from 'react';
import {ProductContainer} from './ItemCount';
import Producto from './Item';
import { Container } from '@material-ui/core';

export default function App (){
    return (
        <div className='App'>
        <Saludo aling= 'center'color='black'name='leydy'/>    
        <ProductContainer stock={10} initial={1}/>
        <Container/>
        </div>
        
    );
};
const Saludo = ({name, aling, children}) => {
    return (
        <>
        <h1 style={{textAlign:aling}}>¡Bienvenida {name}!</h1>
        {children}
        </>
    );
};

 
