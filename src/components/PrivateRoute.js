import React from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({ admin, children }) => {
    return admin ? children : <Navigate to='/login'></Navigate>;
  };


  export default PrivateRoute