import DashboardNav from "@/components/Shared/DashboardNav/DashboardNav";


const layout = ({children}) => {
    return (
        <div>
            <DashboardNav>{children}</DashboardNav>
        </div>
    );
};

export default layout;