export const getAllDonation = async()=>{
    const res = await fetch ('http://localhost:5000/donationCollection', {
        next: {
          revalidate: 5,
        },
      });
    return res.json();
}