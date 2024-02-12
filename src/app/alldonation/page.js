import DonationCard from "@/components/UI/AllDonation/DonationCard";
import ParentAllDonation from "@/components/UI/AllDonation/ParentAllDonation";
import { getAllDonation } from "@/utils/getAllDonationdata";


const Alldonations = async () => {
    const data = await getAllDonation()
    return (
        <div>
            <p className="text-center text-5xl my-16 text-cyan-300 font-sans font-bold">
                Donate to Save Huminity
            </p>

            

            <ParentAllDonation data={data}></ParentAllDonation>


            
        </div>
    );
};

export default Alldonations;