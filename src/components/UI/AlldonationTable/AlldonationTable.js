"use client"
import { getAllDonation } from "@/utils/getAllDonationdata";
import Image from "next/image";
import { useState } from "react";
import UpdateDonation from "./UpdateDonation";
import { useDonationDeleteMutation, useGetAllDonationQuery } from "@/redux/api";


const AlldonationTable = () => {

    const { data } = useGetAllDonationQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });

    const [donationDelete] = useDonationDeleteMutation()
    // console.log(data);

    const [donation, setdonation] = useState([]);

    const handleitem = (item) => {
        setdonation(item)
        // console.log(item);
    }


    const handleDelete = (id) => {
        console.log(id);
        donationDelete(id)

    }

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
                            <th>Price</th>
                            <th>Update Donation</th>
                            <th>Delete Donation</th>
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

                                    <th className="w-1/6 lg:w-1/12">
                                        <button onClick={() => handleDelete(donations._id)} className="btn btn-outline btn-error">
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>

            <UpdateDonation donation={donation} />
        </div>
    );
};

export default AlldonationTable;