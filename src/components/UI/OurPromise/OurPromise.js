"use client"
import Image from "next/image";


const OurPromise = () => {
    return (
        <div className="my-24">
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 ">
                <div className="mx-auto">
                    <Image src="https://i.ibb.co/QJyR4BL/cls-mask-group.webp" alt="" height={500} width={500} className="w-[534px] h-[608px] object-cover" />
                </div>
                <div className="lg:pt-24 w-11/12 mx-auto font-semibold">
                    <p className="text-xl text-accent my-5">
                        HOPEHARVEST ORGANIZATION PROMISE
                    </p>
                    <p className="text-5xl font-bold text-white my-5">
                        WE’RE ON A MISSION TO <br /> SOLVE THE PROBLEMS
                    </p>

                    <p className="text-xl text-accent my-5  font-semibold">
                        Turning Challenges into Opportunities: Together,<br/> We Harvest Hope for a Better Tomorrow
                    </p>

                    <p className="w-11/12 text-white leading-relaxed">
                        At HopeHarvest Organization, our promise is rooted in our unwavering commitment to solving the problems that challenge our communities and our world. We stand firm in our mission, driven by the belief that every challenge presents an opportunity for positive change. With dedication and determination, we tackle the pressing issues facing society, from hunger and poverty to environmental sustainability and beyond. We refuse to accept the status quo, knowing that through collaboration, innovation, and compassion, we can create a brighter future for all.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurPromise;