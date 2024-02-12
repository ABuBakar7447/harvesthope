import Image from 'next/image';
import React from 'react';
import imgpic from '@/asset/help image.jpg';
import './Banner.css';

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
                            <div className="w-full lg:w-[800px] mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-5 justify-center items-center">
                                <input type="text" placeholder="Search For Donation Category" className="input input-bordered input-accent w-full lg:w-1/2 mb-4 lg:mb-0" />
                                <button className="btn btn-outline btn-accent w-full lg:w-auto">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
