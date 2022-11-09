import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../../AddReview/AddReview';

const ServiceDetail = () => {
    const serviceDetail = useLoaderData();
    console.log(serviceDetail);
    const {name, description, picture} = serviceDetail;
    return (
        <div>
            <div className='md:flex md:text-right block text-center m-16'>
                <div className='md:w-1/2 p-4'>
                    <h2 className='text-blue-800 font-extrabold text-5xl'>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className='md:w-1/2'>
                    <img src={picture} height='full' alt="" />
                </div>
            </div>

            <AddReview
            serviceDetail={serviceDetail}
            ></AddReview>

        </div>
    );
};

export default ServiceDetail;