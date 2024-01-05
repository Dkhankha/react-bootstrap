import React, { useState } from 'react';
import ListProduct from './ListProduct';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const Products = () => {
    const [myProd, setMyProd] = useState(productsArr)
    return (
        <div>
            {myProd.map((prod) => (
               <ListProduct 
               price={prod.price}
               image={prod.imageUrl}
               />
            ))}
        </div>
    )
}

export default Products