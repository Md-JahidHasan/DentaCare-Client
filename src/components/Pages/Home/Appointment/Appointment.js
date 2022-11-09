import React from 'react';
import './Appoinment.css';

const Appointment = () => {
    return (
        <div className="hero px-8 appoinment">
        <div className="hero-content  flex">
            <div className="text-center w-1/2 p-10 lg:text-right">
                <h1 className="text-3xl font-bold">Book Your Visit At</h1>
            <h1 className="text-5xl font-bold">DentaCare</h1>
            <p className="py-6">Have an emergency? Do book with us with this simple form below and superior deliverables whereas web-enabled applications. Continually reintermediate integrated processes through technically sound intellectual capital.</p>
            </div>
            <div className="card w-1/2  shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone Number</span>
                    </label>
                    <input type="text" placeholder="phone" name="" id="" className="input input-bordered"/>
                
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="" id=""  className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Book Appointment Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Appointment;