import DonationCard from "@/components/UI/AllDonation/DonationCard";
import { getAllDonation } from "@/utils/getAllDonationdata";


const Alldonations = async () => {
    const data = await getAllDonation()
    return (
        <div>
            <p className="text-center text-5xl my-16 text-cyan-300 font-sans font-bold">
                Donate to Save Huminity 
            </p>
            <div className="grid grid-cols-3  w-5/6 mx-auto">
                {data.map(donations => <DonationCard key={donations._id} donations={donations}></DonationCard>)}
            </div>
        </div>
    );
};

export default Alldonations;