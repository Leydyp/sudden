 import React from 'react'

export const listProduct = [

    {
        id: 1,
        title: "Wafle con frutos rojos",
        description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
        price: 200,
        img: './img/wafles-frutos.jpg',

    },

  {
        id: 2,
        title: "Wafle con dulce de leche",
        description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
        price: 350,
        img: './img/wafles.jpg',

    },
    {
        id: 3,
        title: "Sweet",
        description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
        price: 180,
        img: './img/sweet.jpg',

    },  
    {
        id: 4,
        title: "Macarrons",
        description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
        price: 150,
        img: './img/macarrons.jpg',

    },
    {
        id: 5,
        title: "Apple Crumble",
        description: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
        price: 380,
        img: './img/torta-manzana.jpg',
    }
];


const producto = new Promise ((resolve, reject) =>{
  setTimeout (function(){
    resolve(listProduct);
  },2000);
 });
 producto.
 then (
  function (value){
    console.log(value);
  }
 );

