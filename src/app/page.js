import Activity from "@/components/UI/Activity/Activity";
import AllDonation from "@/components/UI/AllDonation/AllDonation";
import Banner from "@/components/UI/Banner/Banner";
import OurPromise from "@/components/UI/OurPromise/OurPromise";
import Volunteers from "@/components/UI/Volunteers/Volunteers";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Activity></Activity>
      <AllDonation></AllDonation>
      <OurPromise></OurPromise>
      <Volunteers></Volunteers>
    </div>
  );
}
