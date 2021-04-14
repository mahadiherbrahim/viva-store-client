import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://warm-bayou-85170.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    const deleteProduct = (id) => {
        fetch(`https://warm-bayou-85170.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="container">
                    <h2 className="text-center p-5">Manage Products</h2>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => 
                                <tr>
                                    <th scope="row">{product.name}</th>
                                    <td>{product.price}</td>
                                    <td>{product.weight}</td>
                                    <td><button className="btn btn-danger" onClick={ () => deleteProduct(`${product._id}`)}>Delete</button> </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;