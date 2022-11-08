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
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a><Link to='/'>Home</Link></a></li>
                    <li><a><Link to='/services'>Services</Link></a></li>
                    <li tabIndex={0}>
                    <a className="justify-between">
                        Parenteoy
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a><Link>Login</Link></a></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <img width='60px' src='https://i.ibb.co/C7JxQx6/dental-img.png'></img> DentaCare</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/'>Home</Link></li>
                <li><a><Link to='/services'>Services</Link></a></li>
                <li tabIndex={0}>
                    <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    </ul>
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
                
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Book Appointment</a>
            </div>
        </div>
    );
};

export default Header;