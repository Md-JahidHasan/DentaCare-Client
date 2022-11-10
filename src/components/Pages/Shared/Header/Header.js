import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <div className="navbar-css navbar text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li tabIndex={0}>

                    </li>
                    {
                        user?.email? <>
                        <li><Link to={'/addservice'}>Add Service</Link></li>
                        <li><Link to={'/myreview'}>My Review</Link></li>
                        <li><button onClick={handleLogOut}>LogOut</button></li>
                        </>:
                        <>
                        <li><Link to={'/login'}>Login</Link></li>
                        </>
                    }
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <img width='60px' src='https://i.ibb.co/C7JxQx6/dental-img.png'></img> DentaCare</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                
                {
                    user?.email? <>
                    <li><Link to={'/addservice'}>Add Service</Link></li>
                    <li><Link to={'/myreview'}>My Review</Link></li>
                    <li><button onClick={handleLogOut}>LogOut</button></li>
                    </>:
                    <>
                    <li><Link to={'/login'}>Login</Link></li>
                    </>
                }
                <li><Link to='/blogs'>Blogs</Link></li>
                
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Book Appointment</a>
            </div>
        </div>
    );
};

export default Header;