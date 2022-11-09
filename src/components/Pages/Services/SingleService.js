import React, { useEffect, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id, name, picture} = service;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-auto">
            <figure>
                <PhotoView src={picture}>
                    <img src={picture} width='full' height='200px' alt="Shoes" />
                </PhotoView>
            </figure>
            <div className="card-body">
                <h2 className="card-title h-16">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/services/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;