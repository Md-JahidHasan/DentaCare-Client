import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = ({serviceDetail}) => {
    
    const {user, setUpdate} = useContext(AuthContext);
    // console.log(user.email);
    const {name, _id, picture} = serviceDetail;
    const handleReviewForm = event =>{
        event.preventDefault();
        const form = event.target;
        const clientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const photoURL = form.photoURL.value;
        const reviewText = form.review.value;
        const review = {
            reviewId: _id,
            serviceName: name,
            clientName,
            email,
            phone,
            photoURL,
            reviewText
        }

        fetch('https://eleventh-assignment-server-pi.vercel.app/reviews', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){

                alert('Review added successfully!!')
                form.reset()
                // setUpdate(true)
            }
        })
        .catch(error=>console.error(error))


        console.log(review );

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
                    <textarea name='review' className="textarea textarea-accent w-4/5 lg:w-3/5 my-4" placeholder="Write Your Review Here"></textarea>
                </div>
                {
                    user?.email?<>
                    <input className='btn btn-error' type="submit" value="Submit Your Review" />
                    </>: <>
                    <p className='text-2xl'>Please <Link className='text-blue-500 font-bold' to='/login'>Login</Link> To Add Your Review</p>
                    </>
                }
            </form>
        </div>
    );
};

export default AddReview;