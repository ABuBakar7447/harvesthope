"use client"

import { AuthContext } from "@/AuthProvider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createuser, updateUserProfile } = useContext(AuthContext);
    const router = useRouter();

    const handleSignIN = data => {
        console.log(data)
        createuser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(data.name)
                    .then(() => {
                        const userdata = { name: data.name, email: data.email, password:data.password, role:"user" }
                        fetch('http://localhost:5000/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userdata)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Account created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    router.push('/');
                                }
                            })

                    })
                    .catch((error) => {
                        console.log(error)
                    });

            })
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  md:p-24">
                        
                        <div className="card flex-shrink-0 w-full max-w-sm">

                            <h1 className="text-4xl font-bold text-center">Sign Up</h1>

                            <form onSubmit={handleSubmit(handleSignIN)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="bg-white input input-bordered"
                                        {...register("name", { required: true })} />

                                    {errors.name && <span>You must write your name</span>}
                                </div>


                                


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="bg-white input input-bordered"
                                        {...register("email", { required: true })} />

                                    {errors.email && <span>You must write your email</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="bg-white input input-bordered"
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                
                                            })} />
                                    
                                </div>



                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-outline btn-accent" />
                                </div>
                            </form>

                            <p className='text-white text-center'>Already have an account? Then, <Link href='/login' className='underline text-accent'>Sign IN</Link></p>

                            
                        </div>


                    </div>


                </div>


            </div>
        </div>
    );
};

export default SignUp;