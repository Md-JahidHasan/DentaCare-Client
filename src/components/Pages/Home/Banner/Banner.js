import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=''>
            <div className='banner '>
                <div className="left ">
                    <h2>Care For Lifetime</h2>
                    <h1>Let Me Brighten Your Smile</h1>
                </div>
                <div className="right">
                    <img src="https://fortmcmurraysmiles.com/wp-content/uploads/2019/02/dentist-isolated-shadow-large.png" alt="" />
                </div>
            </div>
            <div className=''>
                <div className="bottom-first-banner bg-blue-800 relative bottom-24 left-14 px-24 py-12 w-4/5 text-white">
                    <h3>I Am... <br /> Dentist Associate Professor </h3>
                    <h2 className=' text-3xl font-bold'>Dr. Aslam Almehdi</h2>
                    <hr />
                    <p>BDS, DCD (USSR), FADI (USA)
Dental, <br /> Oral & Maxillofacial Surgery Specialist
Bangabandhu Sheikh Mujib Medical University Hospital</p>
                    <img width='50px' src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/03/signature.png" alt="" />
                </div>
                {/* <div className="bottom-banner bg-red-100   text-white h-98 p-4 mx-12 relative bottom-7 ">
                    <h2 className='text-white font-bold text-4xl p-5'>Book Your Appointment</h2>
                    < hr className='w-3/4' />
                    <div className='flex justify-around'>
                        <div>
                            <img src="https://i.ibb.co/fG0PQdn/secondbanner.png" alt="secondbanner" width='250px' border="0"/>
                        </div>
                        <div className='block'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                </div> */}
                
            </div>
        </div>
    );
};

export default Banner;