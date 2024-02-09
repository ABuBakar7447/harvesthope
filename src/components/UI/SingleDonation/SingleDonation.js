"use client"
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { useUserDonationDataAddMutation } from "@/redux/api";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Swal from "sweetalert2";


const SingleDonation = ({ data }) => {
    const { user } = useContext(AuthContext);
    const [UserDonationDataAdd] = useUserDonationDataAddMutation()

    const handleDonation = data => {
        console.log(data);

        const newdonationdata = {
            categoryid: data._id,
            categoryName: data.categoryName,
            categoryHeading: data.categoryHeading,
            details: data.details,
            img: data.img,
            price: parseInt(data.price),
            email: user.email,
            donarName: user.displayName


        }
        console.log(newdonationdata);
        UserDonationDataAdd({ newdonationdata })

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks For Your Donations',
            showConfirmButton: false,
            timer: 1500
        })





    }
    return (
        <div>
            <div className="my-10">
                <div className="w-11/12 mx-auto">
                    <Image src={data.img} alt="donation-img" width={1000} height={400} className="mx-auto h-full max-h-screen" />

                    {user?.email ? <>

                        <button disabled={false} onClick={() => handleDonation(data)} className="btn btn-outline btn-accent lg:ml-48 my-5">Donate ${data.price}</button>
                    </> : <>
                        <button disabled={true} className="btn btn-outline btn-accent lg:ml-48 my-5">Donate ${data.price}</button>

                        <p className="text-red-600 font-semibold lg:ml-48 mb-10">You need to login first before donate. <span className="text-accent"><Link href='/login'>LogIn?</Link></span></p>

                    </>}

                    <p className="text-accent text-[28px] font-semibold lg:ml-48">
                        {data.categoryHeading}
                    </p>
                    <p className="text-white font-semibold lg:ml-48">
                        {data.details}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SingleDonation;