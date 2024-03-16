import React from 'react'
import { UserAuth } from '../context/Authcontext';
const Navbar = () => {
  const { currentuser,  signoutwithgoogle } = UserAuth();

  const handlelogout =  async()=>{
    try{
      await signoutwithgoogle()
    }
    catch(error){
      console.log(error);
    }
  }
  return (

<nav class="relative select-none bg-grey lg:flex lg:items-center flex-row w-full justify-between bg-slate-900">
  <div class="flex flex-no-shrink items-stretch h-12">
    <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">chatapp</a>
  
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
     {currentuser && <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark bg-blue-400 rounded-sm" onClick={handlelogout}>Logout</a> } 
     
    </div>
  </div>
</nav>
  )
}

export default Navbar