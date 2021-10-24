import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);

            if(data.deletedCount){
                alert('Successfully Deleted Item')
                const remaining = services.filter(service =>service._id !== id);
            setServices(remaining);
            }
            
        })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> handleDelete(service._id)}>Delete X</button>

                </div>)
            }
        </div>
    );
};

export default ManageServices;