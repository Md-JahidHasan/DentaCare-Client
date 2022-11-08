import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const serviceDetail = useLoaderData();
    const {name, description} = serviceDetail;
    return (
        <div>
           <div>
            <h2>{name}</h2>
            <p>{description}</p>
           </div>
        </div>
    );
};

export default ServiceDetail;