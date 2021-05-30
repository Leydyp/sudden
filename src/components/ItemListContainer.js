import React from 'react';
import ItemList from './ItemList';


export default function Contenedor (){
    return ( <>
        <div className='Contenedor'>

        <ItemList stock ={10} initial={1}/>
        
        </div>
        </>
    );
};

 
