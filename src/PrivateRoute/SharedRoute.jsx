import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Loading from "../Loading/Loading";
import PropTypes from "prop-types";

const SharedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [role, , isLoading] = useRole();
    if(loading || isLoading) return <Loading/>

    if( user && (role === 'admin' || role === 'trainer')) return children;

    return <Navigate state={location.pathname} to='/login'/>


};

SharedRoute.propTypes = {
    children: PropTypes.element
  };
export default SharedRoute;