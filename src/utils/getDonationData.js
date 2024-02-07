export const getDonation = async(donationId)=>{
    const res = await fetch (`http://localhost:5000/donationCollection/${donationId}`,{
        next:{
            revalidate: 5,
        },
    });
    return res.json();
}