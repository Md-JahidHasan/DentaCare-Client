import React, { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { Link, useLoaderData, useOutlet } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import SingleService from '../../Services/SingleService';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';


const Home = () => {
    useTitle('home-dentaCare');
    const services = useLoaderData();

    return (
        <div className='text-center'>
            <Banner></Banner>
            <Appointment></Appointment>

        <div className="second-banner">

        </div>
        <PhotoProvider>
            <div className='grid grid-cols-1 md:grid-cols-3  m-14 gap-4'>
            {
                services.map(service=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
            
        </div>
        
        </PhotoProvider>
        <Link className='m-auto' to='/services'><button className='btn btn-error m-8'>See All Services...</button></Link>
        <Contact></Contact>
        </div>
    );
};

export default Home;