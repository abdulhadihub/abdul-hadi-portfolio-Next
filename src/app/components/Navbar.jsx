'use client'
import React from 'react'
import { Link } from 'react-scroll';

function Navbar() {
    const navLinks =
        [
            {
                name: 'Home',
                to: 'home'
            },
            {
                name: 'About',
                to: 'about'
            },
            {
                name: 'Qualifications',
                to: 'qualification'
            },
            {
                name: 'Skills',
                to: 'skill'
            },
            {
                name: 'Services',
                to: 'service'
            },
            {
                name: 'Portfolio',
                to: 'portfolio'
            }
        ]


    return (
        <nav className='shadow-md bg-dark'>
            <div className='flex justify-around items-center h-20'>
                <div>
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-item nav-link active">
                        <h1 className="hover:scale-125 hover:text-primary transition text-4xl font-bold text-light"><span className="text-primary ">Abdul </span>Hadi</h1>
                    </Link>
                </div>
                <div>
                    <ul className='flex '>
                        {navLinks.map((link, index) => (
                            <li key={index} className='transition mx-2 text-light font-semibold hover:text-primary'>
                                <Link to={link.to} spy={true} smooth={true} offset={-70} duration={500} className="nav-item nav-link active">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className='border transition border-primary text-primary hover:bg-primary hover:text-light py-2 px-4 rounded-lg'>Contact Me</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar