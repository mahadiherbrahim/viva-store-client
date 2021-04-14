import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL,setImageURL] = useState('');
    


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL : imageURL,
        }

        console.log(productData);

        const url = `http://localhost:5000/addProduct`;
        fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
        .then(res => {
            console.log(res)
            alert('Your One Product Added')
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','410b5fd5e1b122c413f230644ed7ca8f');
        imageData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="container">
                    <h3 className="text-center p-5">Add Product</h3>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <input  {...register("name")} className="form-control" placeholder="Product Name"/><br/>
                                    <input {...register("price")} className="form-control"  placeholder="Product Price" /><br/>
                                    <input  {...register("weight")} className="form-control"  placeholder="Product Wight"/><br/>
                                    <input type="file" onChange={handleImageUpload} className="form-control" /><br/>
                                    <input type="submit" value="Add Product" className="btn btn-info"/>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;