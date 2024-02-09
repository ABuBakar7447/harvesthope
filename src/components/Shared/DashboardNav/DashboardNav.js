"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardNav = ({children}) => {
    const pathname = usePathname()

    const navoptions =
        <>

            {/* {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard/allgadget'>AllProduct</Link></li> */}
            <li className='w-full flex items-center'><Link href='/admin/alldonation' className={pathname == "/admin/alldonation" ? "active px-16" : "px-16"}>All Donation</Link></li>
            <li className='w-full flex items-center'><Link href='/admin/createdonation' className={pathname == "/admin/createdonation" ? "active px-16" : "px-16"}>AddProduct</Link></li>
            <li className='w-full flex items-center'><Link href='/user/mydonation' className={pathname == "/user/mydonation" ? "active px-16" : "px-16"}>My Donation</Link></li>
            

        </>


    return (
        <div>
            <div className="lg:grid lg:grid-cols-12 grid-cols-none">
                <div className="flex flex-col col-span-2 bg-cyan-900">
                    <div className="navbar-start">

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navoptions}
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex justify-center">
                        <ul className="menu menu-vertical px-1 w-full items-center gap-2">
                            {navoptions}
                        </ul>
                    </div>

                </div>
                <div className="col-span-10">
                    {children}
                </div>

            </div>
        </div>
    );
};

export default DashboardNav;