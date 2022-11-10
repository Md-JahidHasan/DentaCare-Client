import React from 'react';

const ReviewCard = ({review}) => {
    const {reviewText, clientName, email, phone, photoURL} = review; 
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center	'>
                    <div className="avatar">
                        <div className="w-16 mask mask-squircle">
                            <img src={photoURL} />
                        </div>
                    </div>
                    <div className='p-2'>
                        <h2 className='font-semibold text-left'>{clientName}</h2>
                        <p className='text-sm'>Phone:{phone}</p>
                        
                    </div>
                </div>
                <p><q>{reviewText}</q></p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;