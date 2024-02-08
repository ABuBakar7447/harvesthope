import AlldonationTable from "@/components/UI/AlldonationTable/AlldonationTable";
import { getAllDonation } from "@/utils/getAllDonationdata";


const AlldonationsList =() => {
    
    return (
        <div>
           
            <AlldonationTable></AlldonationTable>
        </div>
    );
};

export default AlldonationsList;