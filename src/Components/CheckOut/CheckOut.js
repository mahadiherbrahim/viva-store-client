import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import Header from '../Header/Header';

const CheckOut = () => {

    const { id } = useParams();

    const [product, setProduct] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const history = useHistory();
    const handleCheckOut =(id) =>{
        history.push(`/shipment/${id}`);
    }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="p-5">Checkout</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product[0]?.name}</td>
                                    <td>1</td>
                                    <td>{product[0]?.price} ৳</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>1</td>
                                    <td>{product[0]?.price} ৳</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={()=>handleCheckOut(id)}>CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;