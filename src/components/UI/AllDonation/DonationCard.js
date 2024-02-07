import Image from 'next/image';
import React from 'react';

const DonationCard = ({donations}) => {
    return (
        <div>
            <div>
                <div className="card card-compact max-w-80 bg-base-100 shadow-xl text-accent">
                    <figure>
                        <Image
                            src={donations.img}
                            alt="donation-img"
                            width={320} height={100}
                            
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{donations.categoryName}</h2>
                        <p>{donations.categoryHeading}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-accent">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;