import SingleDonation from "@/components/UI/SingleDonation/SingleDonation";
import { getDonation } from "@/utils/getDonationData";



const DonationId = async ({ params }) => {
    const data = await getDonation(params.donationid);
    // console.log(data)
    return (
        <div>
            <SingleDonation data={data}></SingleDonation>
        </div>
    );
};

export default DonationId;