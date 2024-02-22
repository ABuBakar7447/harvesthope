"use client"
import Image from "next/image";
import { Icon } from '@iconify/react';



const Volunteers = () => {


    return (
        <div className="my-24">
            <div className="grid grid-cols-12 w-11/12 mx-auto h-[600px] bg-gray-900 rounded-2xl p-10 ">

                <div className="col-span-5 flex flex-col justify-center items-center w-3/4 mx-auto">
                    <div>
                        <p className="text-5xl font-bold text-accent my-2">
                            HOPEHARVEST VOLUNTEER’S
                        </p>
                        <p className="text-xl text-white my-2">
                            ALONE ORGANIZATION PROMISE
                        </p>
                        <div className="flex gap-5 my-8">

                            <div>
                                <Icon className="w-16 h-16 text-white" icon="mdi:telephone" />
                            </div>

                            <p className="text-white text-lg">
                                Have Any Question<br />
                                01999999999
                            </p>
                        </div>
                        <button className="btn btn-accent btn-outline w-1/2">BECOME A VOLUNTEERF</button>
                    </div>
                </div>




                <div className="flex justify-center items-center gap-5 col-span-7">
                    <Image src="https://i.ibb.co/zHYjJtk/pmr-team-4-min-240x300.webp" alt="volunteerr-image" width={250} height={350} className="rounded-xl w-[250px] h-[350px] mt-16" />
                    <Image src="https://i.ibb.co/g39sf7m/pmr-team9-min-240x300.jpg" alt="volunteerr-image" width={250} height={350} className="rounded-xl w-[250px] h-[350px] -mt-16" />
                    <Image src="https://i.ibb.co/KwtbBbv/pmr-team-6-min-240x300.webp" alt="volunteerr-image" width={250} height={350} className="rounded-xl w-[250px] h-[350px] mt-16" />
                </div>
            </div>
        </div>
    );
};

export default Volunteers;