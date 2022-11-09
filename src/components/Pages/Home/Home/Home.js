import React, { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from '../../Services/SingleService';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';


const Home = () => {
    const services = useLoaderData();
    console.log(services);

    return (
        <div className='text-center'>
            <Banner></Banner>
            <Appointment></Appointment>

        <div className="second-banner">

        </div>
        <PhotoProvider>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                services.splice(0, 3).map(service=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
            
        </div>
        
        </PhotoProvider>
        <Link className='m-auto' to='/services'><button className='btn btn-error '>See All</button></Link>
        <Contact></Contact>
        </div>
    );
};

export default Home;