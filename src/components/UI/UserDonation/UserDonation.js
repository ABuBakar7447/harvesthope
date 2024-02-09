"use client"

import { AuthContext } from '@/AuthProvider/AuthProvider';
import { useGetUserDonationQuery } from '@/redux/api';
import Image from 'next/image';
import React, { useContext } from 'react';

const UserDonation = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const { data } = useGetUserDonationQuery({ email }, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });
    // console.log(data);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead className="text-accent text-lg">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Donation Name</th>
                            <th>Donation Category</th>
                            <th>You Donated</th>
                            <th>Update Donation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((donations, index) =>
                                <tr key={donations._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={donations.img} alt="donation-img" width={100} height={100} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{donations.categoryHeading}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {donations.categoryName}

                                    </td>
                                    <td>{donations.price}</td>

                                    <th className="w-1/6 lg:w-1/12">
                                        <button onClick={() => handleitem(donations)}>
                                            <label htmlFor="my_modal_6" className="btn btn-outline btn-warning">Update</label>
                                        </button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UserDonation;