import { getDonation } from "@/utils/getDonationData";
import Image from "next/image";


const DonationId = async ({ params }) => {
    const data = await getDonation(params.donationid);
    console.log(data)
    return (
        <div className="my-10">
            <div className="w-11/12 mx-auto">
                <Image src={data.img} alt="donation-img" width={1000} height={400} className="mx-auto h-full max-h-screen"/>
                

                <button className="btn btn-outline btn-accent lg:ml-48 my-5">Donate ${data.price}</button>
                <p className="text-accent text-[28px] font-semibold lg:ml-48">
                    {data.categoryHeading}
                </p>
                <p className="text-white font-semibold lg:ml-48">
                    {data.details}
                </p>
            </div>

        </div>
    );
};

export default DonationId;