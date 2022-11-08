import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='text-center my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 m-auto'>
            {
                services.map(service=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
            
        </div>
        <button className='btn btn-error '>See All</button>
        </div>
        
    );
};

export default Services;