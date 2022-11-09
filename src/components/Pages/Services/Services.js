import React from 'react';
import { PhotoProvider } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='text-center my-10'>
            <PhotoProvider>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-4 m-auto'>
            {
                services.map(service=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
            
        </div>
            </PhotoProvider>
        
        </div>
        
    );
};

export default Services;