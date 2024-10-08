import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import { DataContext } from '../../utils/Context';
import NavDropdown from './NavDropdown';

const Nav = () => {

    const [nav] = useContext(DataContext);

    return (
        <header className='w-full max-w-screen-2xl mx-auto fixed flex flex-col'>
            <div className="navbar bg-[#ffffff] h-[80px] flex justify-between items-center pl-[3.8vw] pr-[2vw] shadow-md shadow-zinc-100">
                <div className="logo-nav-container h-full flex gap-[1vw] items-center">
                    <div className="logo-container">
                        <a href="#">
                            <svg className='myntra-logo lg:w-[3.2rem]' xmlns="http://www.w3.org/2000/svg" viewBox="-2.22 -2.4 358.9 249.3">
                                <path d="m74.38 21.8c7-8.4 14.6-17.4 25.4-20.8 12.1-3.2 22.4 6.3 30 14.4 19.9 22.8 34.4 49.7 47.9 76.7 7.3-16.4 16.4-32 25.8-47.2 9-13.8 18.3-27.8 31.3-38.3 6-4.6 14.3-9 21.8-5.1 10.6 5.6 18.6 14.9 26.1 24 15.9 20.5 28.4 43.4 39.7 66.7 14.1 30 26.3 61.3 31.4 94.2 1.5 15.2 2.9 32.3-6.3 45.6-7.1 10.4-20.6 14-32.6 11.9-10.4-3.7-19.5-10.5-26.3-19.1-16.2-20-25.8-44.2-34.7-68.1-1.3-4.2-2.9-8.3-4.3-12.4-.9 4.2-2.1 8.4-3.5 12.5-9.1 24.2-18.8 48.9-35.5 69-6.7 8.2-15.5 14.5-25.5 18.1-14.4 3-28.3-4.5-37.6-15.1-18.2-19.8-28.3-45.4-37.6-70.3-1.8-5.1-3.6-10.2-4.9-15.5-1.5 5.3-3.3 10.6-5.2 15.7-8.4 22.9-18 46-33.2 65.3-8.3 9.9-19.1 19.6-32.6 20.3-12.5 1.1-24.6-7-29.4-18.4-6.8-15.8-4.8-33.6-1.8-50.1 6.5-31.5 18.5-61.6 32.7-90.3 10.9-22.3 23.3-44.1 38.9-63.7m7.1 7c-15.4 19.6-27.7 41.6-38.7 63.9-13.7 28.9-26.1 59-31.4 90.7-1.9 8.8-1.9 17.9-1 26.8 1.1 8.4 4.4 17.4 12.1 21.7 7.4 4.3 16.9 2.6 23.6-2.2 12-8.4 20-21.2 26.9-33.9 14.8-28.3 24.5-59 31.8-89.9 7.8 31.7 17.6 63.3 33.2 92.2 6.2 10.7 12.7 21.8 22.8 29.2 5.1 4.6 11.8 7.8 18.8 7 7.8-.8 14.3-5.8 19.8-11.1 9.3-9.6 16.1-21.4 22.1-33.2 12.8-26.2 21.6-54.2 28.5-82.4 8.6 34.2 19.3 68.5 37.7 98.9 6.9 10.6 15 21.6 27.1 26.6 8.5 3.5 19.3.4 24.2-7.5 5.9-9.5 6.4-21.3 5.5-32.1-1.2-17.5-6.3-34.5-11.9-51.1-11.2-32-25.9-62.8-43.8-91.5-8.3-12.8-16.9-25.7-28.5-35.9-4.1-3.6-10.2-7.1-15.4-3.5-10 6.1-16.9 15.8-23.9 25-17 24.2-31 50.6-42.5 77.8-.3.4-1.1 1.2-1.4 1.6-1-3.1-2-6.1-3.3-9.1-11.8-25.5-24.9-50.6-41.6-73.2-5.7-7.5-11.6-15.1-19.3-20.6-3.3-2.3-7.7-4.4-11.6-2.4-8.3 3.8-14.1 11.3-19.8 18.2" fill="#fefefe" /><path d="m81.48 28.8c5.7-6.9 11.6-14.3 19.9-18.1 3.9-2 8.3 0 11.6 2.4 7.7 5.5 13.6 13.2 19.3 20.6 16.6 22.7 29.8 47.7 41.6 73.2 1.4 2.9 2.4 6 3.3 9.1-15.4-26.1-29.4-53.2-48.6-76.8-5.6-6.6-11.5-13.6-19.6-17.1-4.6-2-9.3.6-13.1 3.1-13.8 11.6-24 26.7-33.6 41.7-22.6 36-39.6 75.5-50.8 116.5 5.3-31.7 17.6-61.8 31.4-90.7 10.9-22.3 23.2-44.3 38.6-63.9m163.4-17.4c5.2-3.6 11.3-.1 15.4 3.5 11.6 10.1 20.2 23 28.5 35.9 17.9 28.8 32.7 59.5 43.8 91.5 5.6 16.6 10.7 33.5 11.9 51.1-1.9-12.2-5.1-24.2-9.2-35.8-10.6-31.9-25.3-62.5-43.1-91-7.8-12.2-16.1-24.3-26.1-34.7-4-4-8.3-8.2-13.8-10-4.3-1.3-8.2 1.7-11.7 3.8-9.3 7.3-16.5 16.7-23.4 26.2-12.2 17.3-23.1 35.5-32.9 54.2-1.6 3-3.6 5.8-5.8 8.3 11.5-27.3 25.5-53.6 42.5-77.8 7-9.3 14-19.1 23.9-25.2" fill="#9e242e" /><path d="m95.88 25.2c3.8-2.5 8.5-5.1 13.1-3.1 8.1 3.5 14 10.5 19.6 17.1 19.2 23.6 33.2 50.7 48.5 76.8-9.6 27.3-21 54.7-21.7 84-.5 9.4 2 18.6 5.5 27.3-10.1-7.4-16.7-18.5-22.8-29.2-15.5-28.9-25.4-60.4-33.2-92.2-5.6-26.4-10.8-53.4-9-80.7" fill="#ff912e" /><path d="m240.68 25.6c3.5-2.1 7.4-5.1 11.7-3.8 5.5 1.8 9.8 6 13.8 10 10 10.5 18.3 22.5 26.1 34.7 17.8 28.5 32.5 59.1 43.1 91 4.2 11.6 7.3 23.6 9.2 35.8.9 10.8.4 22.6-5.5 32.1-4.9 8-15.6 11-24.2 7.5-12.1-4.9-20.2-16-27.1-26.6-18.4-30.3-29.1-64.6-37.7-98.9-5.8-26.7-11.2-54.1-9.4-81.8m-178.4 41.3c9.6-15 19.8-30.1 33.6-41.7-1.8 27.2 3.4 54.3 9.1 80.7-7.3 31-17.1 61.6-31.8 89.9-6.9 12.7-14.9 25.5-26.9 33.9-6.7 4.8-16.2 6.5-23.6 2.2-7.7-4.3-11-13.4-12.1-21.7-1-8.9-.9-18 1-26.8 11-41 28.1-80.5 50.7-116.5" fill="#f41cb2" /><path d="m217.28 51.8c6.9-9.5 14.1-18.9 23.4-26.2-1.8 27.6 3.6 55.1 9.5 81.9-6.9 28.3-15.8 56.2-28.5 82.4-6 11.9-12.8 23.6-22.1 33.2-5.4 5.3-12 10.3-19.8 11.1-7 .8-13.7-2.4-18.8-7-3.5-8.7-6-17.9-5.5-27.3.7-29.3 12.1-56.8 21.7-84 .3-.4 1.1-1.2 1.4-1.6 2.2-2.6 4.2-5.3 5.8-8.3 9.9-18.7 20.7-36.9 32.9-54.2" fill="#f25511" />
                            </svg>
                        </a>
                    </div>
                    <nav className='h-full'>
                        <ul className='flex h-full items-end font-["assistant-bold"]'>
                            {
                                nav.map(item => (
                                    <li className='navlink' key={item.id}>
                                        <NavLink className={`${item.border} ${item.new && 'relative'} hover:border-b-[4px] uppercase h-[50px] px-[1.1rem] text-[0.9rem] text-[#282c3f] flex items-start`} to={item.path}>{item.title}{item.new && <span className='absolute top-0 right-[-0.3rem] text-[0.6rem] text-[#ff3f6c]'>new</span>}</NavLink>
                                        {
                                           item.category && <NavDropdown data={item.category} />
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className="search-ac flex h-full items-center gap-[2vw]">
                    <div className="search-bar relative">
                        <IoIosSearch className='absolute top-[50%] left-[3%] -translate-y-[50%] text-zinc-600 text-[1.15rem]' />
                        <input className='w-[27vw] border-[#f4f4f5] text-[0.9rem] placeholder:text-zinc-500 py-[1.5vh] pl-[3.5vw] rounded-[3px] outline-none bg-[#f4f4f5] focus:border focus:bg-[#ffffff]' type="text" placeholder='Search for products, brands and more' />
                    </div>
                    <div className="account flex text-[0.75rem] font-[assistant-bold] gap-[2vw]">
                        <Link to="/profile" className='flex flex-col items-center'><CiUser className='text-[1.3rem]' />Profile</Link>
                        <Link to="/wishlist" className='flex flex-col items-center'><CiHeart className='text-[1.3rem]' />Wishlist</Link>
                        <Link to="/cart" className='flex flex-col items-center'><PiHandbagLight className='text-[1.3rem]' />Bag</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav