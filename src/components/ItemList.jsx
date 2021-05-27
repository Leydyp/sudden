
import React,{Component} from 'react';
import {useState, useEffect, Component} from 'react';
import Card from "@material-ui/core/Card";

export const listProducts = () => {

[
        {
            id: 1,
            title: "Wafle con frutos rojos",
            description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
            price: 200,
            image: './img/wafles-frutos.jpg',
     
        },
     
      {
            id: 2,
            title: "Wafle con dulce de leche",
            description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
            price: 350,
            image: './img/wafles.jpg',
     
        },
        {
            id: 3,
            title: "Sweet",
            description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
            price: 180,
            image: './img/sweet.jpg',
     
        }, 
        {
            id: 4,
            title: "Macarrons",
            description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
            price: 150,
            image: './img/macarrons.jpg',
     
        },
        {
            id: 5,
            title: "Apple Crumble",
            description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
            price: 380,
            image: './img/torta-manzana.jpg',
        },
      ];
};


function itemList ({title}){

    const [productos, setProductos] = useState([]);
     
    const obtenerProductos = async ()=> {
     setTimeout (()=> {
       const datosProductos = listProducts;
       setProductos (datosProductos);
     },2000);
    }

     useEffect (function(){
        console.log('me ejecute');
        obtenerProductos();
       },[]);
        
        return (
          <Card>
               {productos?.map((item) => {
              return (
                <Card key={item.listProduct} image={item.img} value={title}>
                  {item.description}
                </Card>
              );
            })}
          </Card>
        );
    }
     
   
      
    
    export default itemList
    






 /*
 const getProductos = () => {
    ItemList.get("./ItemList").then((res) => {
  
      console.log(res.data);
      setProductos(res.data);
    });
  };

  useEffect (()=>{
    getProductos();
},[]);*/


