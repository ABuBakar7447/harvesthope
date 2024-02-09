export const getDonation = async(donationId)=>{
    const res = await fetch (`https://hope-harvest-server.vercel.app/donationCollection/${donationId}`,{
        next:{
            revalidate: 5,
        },
    });
    return res.json();
}