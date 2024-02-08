import { getAllDonation } from "@/utils/getAllDonationdata";
import Image from "next/image";


const AlldonationTable = async () => {
    const data = await getAllDonation();
    console.log(data)
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((donations, index) =>
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
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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

export default AlldonationTable;