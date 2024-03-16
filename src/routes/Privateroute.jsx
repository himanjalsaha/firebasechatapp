import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';
const Privateroute = ({children}) => {
  const {currentuser } = UserAuth();

  

    if(!currentuser){
        return <Navigate to = "/" replace={true}/>
    }
  return children
}

export default Privateroute