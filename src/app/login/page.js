"use client"

import { AuthContext } from "@/AuthProvider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Swal from "sweetalert2";

const LogIn = () => {

    const {signIn} =useContext(AuthContext)
    const router = useRouter()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user.displayName);
                Swal.fire({
                    title: 'Successfully Logged In',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                router.push('/')
                // navigate(from, { replace: true });
            })

    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  md:p-24">
                        <div className=" text-center lg:text-left">

                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm">

                            <h1 className="text-4xl font-bold text-center">Sign In</h1>
                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="bg-white input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-700">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="bg-white input input-bordered" required />
                                </div>



                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn btn-outline btn-accent" />
                                </div>
                            </form>

                            <p className='text-white text-center'>New Here? Create a new account, <Link href='/signup' className='underline text-accent'>Sign UP</Link></p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;