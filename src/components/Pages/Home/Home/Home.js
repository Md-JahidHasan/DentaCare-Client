import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from '../../Services/SingleService';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';


const Home = () => {
    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            <Banner></Banner>
            <Appointment></Appointment>

        <div className="second-banner">

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                services.splice(0, 3).map(service=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
            <Link to='/services'><button className='btn btn-error '>See All</button></Link>
        </div>
        <Contact></Contact>
        </div>
    );
};

export default Home;