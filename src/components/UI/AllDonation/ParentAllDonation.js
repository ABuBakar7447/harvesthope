"use client"
import React, { useState } from 'react';
import DonationCard from './DonationCard';

const ParentAllDonation = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = searchQuery
        ? data?.filter((item) =>
            item.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : data;


    return (
        <div className=''>

            <div className="flex justify-center mb-24">
                {/* // searchBar// */}
                <input
                    type="text"
                    placeholder="Search donation by category"
                    className="input input-bordered input-primary w-1/4"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>


            
        </div>
    );
};

export default ParentAllDonation;