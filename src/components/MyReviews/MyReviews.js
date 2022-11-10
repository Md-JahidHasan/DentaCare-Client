import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from '../Pages/ServiceDetail/ReviewCard';

const MyReviews = () => {
    useTitle('dentaCare-review')
    
    // -----------load User------------
    const {user, logOut} = useContext(AuthContext);
    // ------load each service review--------
    const [reviews, setReviews] = useState([]);
    const url = `https://eleventh-assignment-server-pi.vercel.app/reviews?email=${user.email}`
    useEffect(()=>{
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentaCare-token')}`
            }
        })
        .then(res =>{
            if(res.status===401 || res.status === 403){
                logOut()
            }
            return  res.json()
        })
        .then(data => {
            setReviews(data)
        })
        
    },[user?.email])

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