import { useDonationDataUpdataMutation } from '@/redux/api';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateDonation = ({ donation }) => {

    const _id = donation._id;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [donationDataUpdata] = useDonationDataUpdataMutation()


    const img_hosting_token = process.env.NEXT_PUBLIC_imgbb_secret;
    // console.log(img_hosting_token);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const handleUpdate = data => {
        console.log(data);
        const formdata = new FormData();
        formdata.append('image', data.img[0])



        fetch(img_hosting_url, {
            method: 'POST',
            body: formdata
        })

            .then(res => res.json())
            .then(imgresponse => {


                if (imgresponse.success) {
                    const imgURL = imgresponse.data.display_url;


                    const donataionnew = {
                        id: Math.floor(Math.random() * (1000 - 1) + 1),
                        // categoryName:data.categoryName,
                        categoryHeading:data.categoryHeading,
                        details:data.details,
                        img: imgURL,
                        price: parseInt(data.price),
                        categoryName:data.categoryName
                        
                    }

                    console.log(donataionnew);
                    const datas = {
                        id: _id,
                        data: { donataionnew }
                    }

                    donationDataUpdata(datas)

                }
            })

    }

    return (
        <div>
            <div >
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">

                        <p className='text-accent text-3xl text-center font-sans font-semibold my-6'>Update the current Details</p>

                        <Image src={donation.img} alt='donation-img' width={300} height={300} className='w-full' />
                        <form onSubmit={handleSubmit(handleUpdate)} className="card-body text-black">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Donation Category</span>
                                </label>
                                <input defaultValue={donation.categoryName} className="bg-white input input-bordered" {...register("categoryName", { required: true, maxLength: 20 })} />

                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Donation Heading</span>
                                </label>
                                <input defaultValue={donation.categoryHeading} className="bg-white input input-bordered" {...register("categoryHeading", { required: true, maxLength: 20 })} />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Donation Price</span>
                                </label>
                                <input defaultValue={donation.price} className="bg-white input input-bordered" {...register("price", { required: true, maxLength: 20 })} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Donation Details</span>
                                </label>
                                <textarea defaultValue={donation.details} className="bg-white textarea textarea-bordered  h-36" {...register("details", { required: true, maxLength: 20000 })} />
                            </div>



                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text text-accent">Item Image*</span>
                                </label>
                                <input type="file"
                                    {...register("img", { required: true })}
                                    className="file-input bg-white text-black file-input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Update" className="btn btn-outline btn-accent text-accent font-bold" />
                            </div>
                        </form>


                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDonation;