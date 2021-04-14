import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Shipment = () => {
    
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const shipmentData = {
            productId : id,
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone
        }

        console.log(shipmentData);

        const url = `http://localhost:5000/addOrder`;
        fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(shipmentData),
        })
        .then(res => {
            console.log(res);
            alert('Your Order Submited Successfully')
            history.push(`/order`);
        })
    };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div>
            <Header></Header>
            <div className="container m-2">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2 className="text-center m-4">Please Submit Your Information </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input  {...register("name")}  className="form-control" placeholder="Your Name"/> <br/>
                            <input defaultValue={loggedInUser.email} {...register("email", { required: true })}  className="form-control" placeholder="Your Email"/> <br/>
                            {errors.email && <span>Email field is required</span>}
                            <input  {...register("address", { required: true })}  className="form-control" placeholder="Your Address"/> <br/>
                            {errors.email && <span>Address field is required</span>}
                            <input  {...register("phone", { required: true })}  className="form-control" placeholder="Your Phone"/> <br/>
                            {errors.email && <span>Phone field is required</span>}
                            <input type="submit" className="btn btn-primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;