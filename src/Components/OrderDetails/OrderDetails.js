import React from 'react';

const OrderDetails = ({order}) => {
    const {_id,name,email,address,phone,productId} = order;
    return (
        <div className="border border-success rounded p-3 m-4">
            <h4> <strong className="text-success">Order Id :</strong> {_id}</h4>
            <h4><strong className="text-success">Order BY :</strong> {name} / Email : {email}</h4>
            <h4><strong className="text-success">Shipment Address :</strong> {address}</h4>
            <h4><strong className="text-success">Product Id :</strong> {productId}</h4>
            <p className="text-danger">Your Product is Shipment. Thank you stay with us.</p>
        </div>
    );
};

export default OrderDetails;