import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DonationCard = ({donations}) => {
    return (
        <div>
            <div>
                <div className="card card-compact max-w-80 bg-base-100 shadow-xl text-accent mx-auto">
                    <figure>
                        <Image
                            src={donations.img}
                            alt="donation-img"
                            width={320} height={100}
                            
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{donations.categoryName}</h2>
                        <p className='text-white text-lg'>{donations.categoryHeading}</p>
                        {
                            donations.details.length>30? <p>{donations.details.slice(0, 35)} .... </p> :''
                        }
                        <div className="card-actions justify-end">
                            <Link href={`/alldonation/${donations._id}`}><button className="btn btn-outline btn-accent">See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;