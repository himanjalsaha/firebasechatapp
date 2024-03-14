import React from 'react'
import { Navigate } from 'react-router-dom';
const Privateroute = ({children}) => {
    const currentuser = false;

    if(!currentuser){
        return <Navigate to = "/" replace={true}/>
    }
  return children
}

export default Privateroute