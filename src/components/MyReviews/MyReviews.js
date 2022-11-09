import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../Pages/ServiceDetail/ReviewCard';

const MyReviews = () => {
    // -----------load User------------
    const {user} = useContext(AuthContext);
    // ------load each service review--------
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            const myServiceReview = data.filter(singleData=>singleData.email == user?.email);
            console.log(myServiceReview);
            setReviews(myServiceReview)
        })
    }, [])
    return (
        <div className='grid grid-cols-2 m-6 text-center gap-4'>
                {
                    reviews?.map(review=><ReviewCard
                    review={review}
                    ></ReviewCard>)
                }
            </div>
    );
};

export default MyReviews;