import React from 'react';


const Saludo = ({name, aling, children}) => {
    return (
        <>
        <h1 style={{textAlign:aling}}>¡Bienvenida {name}!</h1>
        {children}
        </>
    );
};

export default function App (){
    return (
        <div className='App'>
        <Saludo aling= 'center'color='black'name='leydy'/>    
        </div>
    );
};
