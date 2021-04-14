import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderDetails from '../OrderDetails/OrderDetails';
import Product from '../Product/Product';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Your Total Order : {order.length}</h2>
                        <div className="order">
                            {
                                order.map(order => <OrderDetails order={order}></OrderDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;