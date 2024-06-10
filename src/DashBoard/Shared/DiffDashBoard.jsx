import useRole from "../../Hooks/useRole";
import Loading from "../../Loading/Loading";
import AdminDashBoard from "../Admin/AdminDashBoard";
import TrainerDashBoard from "../Trainer/TrainerDashBoard";


const DiffDashBoard = () => {
    const [role, , isLoading] = useRole();
    if(isLoading) return <Loading></Loading>
    return (
        <div>
            {role === 'admin' && <AdminDashBoard></AdminDashBoard>}
            {role === 'trainer' && <TrainerDashBoard></TrainerDashBoard>}
        </div>
    );
};

export default DiffDashBoard;