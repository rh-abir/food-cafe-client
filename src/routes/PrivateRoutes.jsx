import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthPorviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    else if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>;
};

export default PrivateRoutes;