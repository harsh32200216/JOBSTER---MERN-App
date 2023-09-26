import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RecRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.signIn);
    return userInfo && userInfo.role === 2 ? children : <Navigate to="/" />;
}

export default RecRoute;