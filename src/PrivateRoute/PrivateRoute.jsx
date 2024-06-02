import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Loading/Loading";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
   const { user, loading} = useAuth();
   const location = useLocation()
   if(loading) return <Loading/>

   if(user) return children;

   return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.element
}

export default PrivateRoute;