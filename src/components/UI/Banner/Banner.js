'use client'

import Image from 'next/image';
import React from 'react';
import imgpic from '@/asset/help image.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="hero min-h-screen bg-base-200 relative">
                        {/* Use the Image component with the required props */}
                        <Image
                            src={imgpic}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="hero-overlay"></div> {/* Add a div for the overlay */}
                        <div className="hero-content text-center relative z-10 text-white">
                            <div className="w-[800px] flex gap-5 justify-center">

                                <input type="text" placeholder="Search For Donnation Category" className="input input-bordered input-accent w-1/2" />

                                <button className="btn btn-outline btn-accent">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;