import React, { useEffect, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id, name, picture, description, price} = service;
    
    return (
        <div className="card w-full bg-base-100 shadow-xl m-auto">
            <figure>
                <PhotoView src={picture}>
                    <img src={picture} width='full' height='200px' alt="Shoes" />
                </PhotoView>
            </figure>
            <div className="card-body">
                <h2 className="card-title h-16">{name}</h2>
                <p>{description.slice(0, 95)+`...`}</p>
                <p className='text-start text-blue-600'>Approximate Fee: ${price}</p>

                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/services/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;