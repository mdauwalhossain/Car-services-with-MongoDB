import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        
       
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            if (res.data.insertedId){
                alert('added successfully')
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h2>AddServices</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;