"use client"
import { AuthContext } from '@/AuthProvider/AuthProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const pathname = usePathname()

    const handleLogout = () => {
        logout()
            .then = (() => { })
                .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link href='/' className={pathname == "/" ? "active" : ""}>Home</Link></li>
        <li><Link href='/alldonation' className={pathname == "/alldonation" ? "active" : ""}>All Donation</Link></li>
        {/* <li><Link href='/login'>Log In</Link></li>
        <li><Link href='/signup'>Signup</Link></li> */}

        {
            user?.email ?
                <>

                    <li><Link href='' onClick={handleLogout}>LogOut</Link></li>

                </>
                :
                <>
                    <li><Link href='/login'>Sign IN</Link></li>
                </>
        }
        <li><Link href='/user/mydonation' className={pathname == "/user/mydonation" ? "active" : ""}>Dashboard</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-accent text-black font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;