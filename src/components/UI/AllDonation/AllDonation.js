import { getAllDonation } from "@/utils/getAllDonationdata";
import Image from "next/image";
import DonationCard from "./DonationCard";
import Link from "next/link";


const AllDonation = async () => {
    const data = await getAllDonation();
    // console.log(data);
    return (
        <div>
            <p className="text-4xl text-center font-bold text-accent my-16">
                Visit The Donation Page & <br /> Help Other
            </p>
            <div className="grid grid-cols-4 gap-5 w-5/6 mx-auto">
                {data.slice(0, 4).map(donations => <DonationCard key={donations._id} donations={donations}></DonationCard>)}
            </div>

            <div className="text-center mt-16">
               <Link href='/alldonation'> <button className="btn btn-outline btn-accent my-10">See All</button> </Link>
            </div>


        </div>
    );
};

export default AllDonation;