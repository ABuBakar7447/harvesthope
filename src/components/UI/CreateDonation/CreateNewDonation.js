"use client"


import { useDonationDataAddMutation } from "@/redux/api";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateNewDonation = () => {
    const [donationDataAdd] = useDonationDataAddMutation()


    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const img_hosting_token = process.env.NEXT_PUBLIC_imgbb_secret;
    // console.log(img_hosting_token);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const handleCreate = data => {
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


                    const newdonationdata = {
                        id: Math.floor(Math.random() * (1000 - 1) + 1),
                        categoryName: data.categoryName,
                        categoryHeading: data.categoryHeading,
                        details: data.details,
                        img: imgURL,
                        price: parseInt(data.price),
                        

                    }

                    // console.log(donataionnew);
                    // const datas = {
                    //     id: _id,
                    //     data: { donataionnew }
                    // }

                    donationDataAdd({newdonationdata});
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your New Donation Data Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    

                }
            })

    }

    return (
        <div>

            <div className="w-3/4 mx-auto">
                <form onSubmit={handleSubmit(handleCreate)} className="card-body text-black">

                    <div className="flex justify-between">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">Donation Category</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("categoryName", { required: true, maxLength: 20 })} />

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">Donation Heading</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("categoryHeading", { required: true, maxLength: 20 })} />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">Donation Price</span>
                            </label>
                            <input className="bg-white input input-bordered" {...register("price", { required: true, maxLength: 20 })} />
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Donation Details</span>
                        </label>
                        <textarea className="bg-white textarea textarea-bordered  h-36" {...register("details", { required: true, maxLength: 20000 })} />
                    </div>



                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text text-accent">Item Image*</span>
                        </label>
                        <input type="file"
                            {...register("img", { required: true })}
                            className="file-input bg-white text-black file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control mt-6 w-1/4 mx-auto">
                        <input type="submit" value="Create New Donation" className="btn btn-outline btn-accent text-accent font-bold" />
                    </div>
                </form>
            </div>


            
        </div>

    );
};

export default CreateNewDonation;