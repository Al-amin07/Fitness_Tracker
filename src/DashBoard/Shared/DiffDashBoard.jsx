import { Helmet } from "react-helmet";
import useRole from "../../Hooks/useRole";
import Loading from "../../Loading/Loading";
import AdminDashBoard from "../Admin/AdminDashBoard";
import TrainerDashBoard from "../Trainer/TrainerDashBoard";
import MemberDash from "../Member/MemberDash";

const DiffDashBoard = () => {
  const [role, , isLoading] = useRole();
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title> {role[0].toUpperCase() + role.slice(1)} | DashBoard</title>
      </Helmet>
      {role === "member" && <MemberDash></MemberDash>}
      {role === "admin" && <AdminDashBoard></AdminDashBoard>}
      {role === "trainer" && <TrainerDashBoard></TrainerDashBoard>}
    </div>
  );
};

export default DiffDashBoard;
