import AlldonationTable from "@/components/UI/AlldonationTable/AlldonationTable";
import { getAllDonation } from "@/utils/getAllDonationdata";


const AlldonationsList =async () => {
    const data = await getAllDonation();
    console.log(data);
    return (
        <div>
           
            <AlldonationTable></AlldonationTable>
        </div>
    );
};

export default AlldonationsList;