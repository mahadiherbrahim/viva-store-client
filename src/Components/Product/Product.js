import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'

const Product = ({product}) => {

    const history = useHistory()
    
    const handleBook = (id) => {
        history.push(`/checkout/${id}`);
    }

    return (
        <div className="col-md-4">
            <div className="card h-100 viva-card shadow p-3">
                <img src={product.imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title viva-title-2">{product.name}</h4>
                    <p className="card-text">{product.weight}</p>
                </div>
                <div className="card-footer d-flex justify-content-between viva-card-footer">
                    <h2 className="viva-title-1">{product.price}৳</h2>
                    <button className="btn btn-primary viva-button" onClick={() => handleBook(product._id)}> Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;