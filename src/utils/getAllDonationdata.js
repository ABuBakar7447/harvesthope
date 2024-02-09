export const getAllDonation = async()=>{
    const res = await fetch ('https://hope-harvest-server.vercel.app/donationCollection', {
        next: {
          revalidate: 5,
        },
      });
    return res.json();
}