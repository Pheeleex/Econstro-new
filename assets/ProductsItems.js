import { Smartwatch, Headphone, Curology, Curology2, Sneaker1, Sneaker2, Facecap, Earphones,
    RedSneakers, Bluesneakers, Controller, AppleWatch, Item1,
    Smartphone
 } from "."


const ProductItems = [
    {productName:'Apple Watch, APX5', src:AppleWatch , info:'Long lasting battery', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: false, group: "A", id: 1},

    {productName:'Sony Headset, EPX5', src: Headphone , info:'HD sound', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "B", id: 2},

    {productName:'Curology, full set', src:Curology , info:'soft and clean', 
    price:'15,00.90', formerPrice:'20,000.90', bestPrice: true, group: "C", id: 3},

    {productName:'Red Sneakers, Flexible', src:RedSneakers , info:'HD sound', 
    price:'10,000.90', formerPrice:'20,000.90', style:{backgroundColor:'none'},
    imgStyle:{backgroundColor:"none", width:"100%", bestPrice: true, group: "C", id: 4}
    },

    {productName:'Yo Face Cap', src:Facecap , info:'Long lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: false, group: "C", id: 5},

    {productName:'Smartphone', src:Smartphone, info:'Long lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "A", id: 6},

    {productName:'Yo Game Pad, Fullset', src:Controller, info:'Soft and clean', 
    price:'15,000.90', formerPrice:'20,000.90', bestPrice: true, group: "A", id: 7}, 

    {
      productName: 'Yo airpods, flixable', src:Earphones, info:'Long Lasting', 
    price:'15,000.90', formerPrice:'20,000.90',bestPrice: true,group: "B", id: 8
    },

    {productName:'Blue Sneakers, Flexible', src:Bluesneakers , info:'Long Lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "C", id: 9
    },

    {productName:'The Sneakers, Flexible', src:Item1 , info:'Long Lasting', 
    price:'10,000.90', formerPrice:'20,000.90', bestPrice: true, group: "C", id: 10
    },

    {
      productName: 'Airpods, flixable', src:Earphones, info:'Long Lasting', 
    price:'15,000.90', formerPrice:'20,000.90',bestPrice: true, group: "B", id: 11
    },

]
export default ProductItems