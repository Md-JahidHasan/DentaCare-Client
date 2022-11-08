import React from 'react';
import { BsFillTelephonePlusFill, FaAddressBook, FaMailchimp, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='text-center'>
                <div className=''><FaPhone/></div>
                <h2>Emergency Phone</h2>
                <p>415-205-5550</p>
                <p>Call us Anytime 24/7</p>

            </div>
            <div className='text-center'>
                <h1><FaAddressBook/></h1>
                <h2>Address</h2>
                <p>500 Linden Ave, South San Francisco,</p>
                <p>CA 94080, United States</p>
            </div>
            <div className='text-center'>
                <h1><FaPhone/></h1>
                <h2>Book By Phone</h2>
                <p>415-205-5550</p>
                <p>405-222-5551</p>
            </div>
            <div className='text-center'>
                <h1><FaMailchimp/></h1>
                <h2>Email Us</h2>
                <p>415-205-5550</p>
                <p>Call us Anytime 24/7</p>
            </div>
        </div>
    );
};

export default Contact;