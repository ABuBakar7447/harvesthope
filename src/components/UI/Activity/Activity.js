import Image from "next/image";


const Activity = () => {




    const services = [
        {
            "id": 1,
            "icon": "https://i.ibb.co/drhL0Km/icons8-receive-cash-94.png",
            "activity": "Donation Activity"
        },
        {
            "id": 2,
            "icon": "https://i.ibb.co/vX7bJJn/icons8-volunteer-94.png",
            "activity": "Become a Volunteer"
        },
        {
            "id": 3,
            "icon": "https://i.ibb.co/v4gdYyc/icons8-log-cabin-94.png",
            "activity": "Social Welfare"
        },
        {
            "id": 4,
            "icon": "https://i.ibb.co/mqjzB2b/icons8-handshake-94.png",
            "activity": "International Sponsership"
        },
        {
            "id": 5,
            "icon": "https://i.ibb.co/VMCtddk/icons8-people-94.png",
            "activity": "Helping Center"
        },
    ]
    return (
        <div className="my-24">
            <div className="flex flex-col lg:flex-row md:flex-row gap-5 justify-center">
                {services.map(service =>
                    <div key={service.id} className="w-[250px] h-[250px] border-4 border-accent hover:bg-accent hover:border-white hover:border-4 text-white flex flex-col justify-center items-center rounded-xl">
                        <Image src={service.icon} alt="activity icon" height={100} width={100}/>

                        <p className="font-semibold text-xl text-center mt-5 ">{service.activity}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Activity;