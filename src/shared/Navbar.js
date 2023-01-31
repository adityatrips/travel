import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (<>
        <nav className='navbar navbar-expand-md bg-body sticky-top py-3' id='mainNav'>
            <div className='container'>
                <a className='navbar-brand d-flex align-items-center' href='/'>
                    <span
                        className='bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon'>
                        <img src="/assets/img/brands/logo.png" className="nav-image"/>
                    </span>
                </a>
                <button data-bs-toggle='collapse' className='navbar-toggler' data-bs-target='#navcol-1'>
                    <span className='visually-hidden'>Toggle navigation</span>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navcol-1'>
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item'>
                            <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                                     to='/services'>
                                Services
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                                     to='/projects'>
                                Projects
                            </NavLink>
                        </li>
                        <div className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                                     to='/package'>
                                Packages
                            </NavLink>
                        </div>
                        <li className='nav-item'>
                            <NavLink to='contact'
                                     className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
};

export default Navbar;
