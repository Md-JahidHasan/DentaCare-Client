import React from 'react';
import { BsFillTelephonePlusFill, FaAddressBook, FaMailchimp, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='grid grid-cols-4 mx-8 my-14'>
            <div className='text-center'>
                <img className='m-auto' src="https://cdn.iconscout.com/icon/free/png-256/emergency-call-2221248-1852309.png" width='80px' alt="" />
                <h2>Emergency Phone</h2>
                <p>415-205-5550</p>
                <p>Call us Anytime 24/7</p>

            </div>
            <div className='text-center'>
                <img className='m-auto' src="https://cdn-icons-png.flaticon.com/512/6614/6614958.png" width='70px' alt="" />
                <h2>Address</h2>
                <p>500 Linden Ave, South San Francisco,</p>
                <p>CA 94080, United States</p>
            </div>
            <div className='text-center'>
                <img className='m-auto' src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png" width='80px' alt="" />
                <h2>Book By Phone</h2>
                <p>415-205-5550</p>
                <p>405-222-5551</p>
            </div>
            <div className='text-center'>
                <img className='m-auto' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width='80px' alt="" />
                <h2>Email Us</h2>
                <p>415-205-5550</p>
                <p>Call us Anytime 24/7</p>
            </div>
        </div>
    );
};

export default Contact;