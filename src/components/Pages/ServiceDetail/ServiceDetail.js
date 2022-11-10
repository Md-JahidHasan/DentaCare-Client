import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../../AddReview/AddReview';
import ReviewCard from './ReviewCard';
import ReviewSection from './ReviewCard';

const ServiceDetail = () => {
    
    // -------load each service details-----
    const serviceDetail = useLoaderData();
    const {name, description, picture, _id} = serviceDetail;


    // ------load each service review--------
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);
    useEffect(()=>{
        fetch('https://eleventh-assignment-server-pi.vercel.app/service-reviews')
        .then(res=>res.json())
        .then(data=>{
            const perServiceReview = data.filter(singleData=>singleData.reviewId === _id);
            // console.log(perServiceReview);
            setReviews(perServiceReview)
        })
    }, [])


    return (
        <div className='text-center'>
            <div className='md:flex md:text-right block text-center m-16'>
                <div className='md:w-1/2 p-4'>
                    <h2 className='text-blue-800 font-extrabold text-5xl'>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className='md:w-1/2'>
                    <img src={picture} height='full' alt="" />
                </div>
            </div>
            <h2 className='text-pink-800 font-bold text-4xl'>Clients Reviews</h2>
            <div className='grid grid-cols-2 m-6 text-center gap-4'>
                {
                    reviews?.map(review=><ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
            <AddReview
            serviceDetail={serviceDetail}
            ></AddReview>

        </div>
    );
};

export default ServiceDetail;