import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;