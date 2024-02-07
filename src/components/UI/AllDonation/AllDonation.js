import { getAllDonation } from "@/utils/getAllDonationdata";
import Image from "next/image";
import DonationCard from "./DonationCard";


const AllDonation =async () => {
    const data = await getAllDonation();
    console.log(data);
    return (
        <div>
            <p className="text-4xl text-center font-bold text-accent my-16">
                Visit The Donation Page & <br/> Help Other
            </p>
            
            
        </div>
    );
};

export default AllDonation;