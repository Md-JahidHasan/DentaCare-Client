import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReview = ({serviceDetail}) => {
    const {user} = useContext(AuthContext);
    const {name, _id, picture} = serviceDetail;
    const handleReviewForm = event =>{
        event.preventDefault()
        console.log(_id );

    }
    return (
        <div className='my-10'>
            <form onSubmit={handleReviewForm} action="" className='text-center'>
                <h1 className='text-4xl font-extrabold text-pink-900'>Share Your Exprience With My Service</h1>
                <p className='text-blue-800 my-8'>Thank you for taking my service. <br /> I'd love to hear feedback from you. Please fill out the form below:</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 lg:w-3/5 m-auto'>
                    <input type="text" placeholder="Your Name" name='name' className="input input-bordered input-info w-full " />
                    <input type="text" placeholder="Your Email" defaultValue={user?.email} readOnly name='email' className="input input-bordered input-info w-full " />
                    <input type="text" placeholder="Your Phone Number" name='phone' className="input input-bordered input-info w-full " />
                    <input type="text" placeholder="Type photo URL" name='photoURL' className="input input-bordered input-info w-full " />
                </div>
                <div>
                    <textarea className="textarea textarea-accent w-4/5 lg:w-3/5 my-4" placeholder="Write Your Review Here"></textarea>
                </div>
                <input className='btn btn-error' type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default AddReview;