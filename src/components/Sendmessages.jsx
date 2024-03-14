import React, { useState } from 'react'

const Sendmessages = () => {
    const [value , setvalue]  = useState("");
    console.log(value);

    const handlesubmit  = (e) => {
        e.preventDefault()
        console.log(value);
        setvalue("")
        

    }

  return (
    <div className=' bottom-0 bg-gray-300 p-2 rounded-lg shadow-md fixed w-full'>
        <form onSubmit={handlesubmit} className=' flex flex-row' >
            <input value={value} onChange={e=>setvalue(e.target.value)} type="text" className='w-full p-4 bg-neutral-800 text-white rounded-l-lg outline-none' placeholder='Enter your message' />
            <button type='submit' className='bg-neutral-600 p-4 text-white rounded-r-lg'>send</button>
            
        </form>
    </div>
  )
}

export default Sendmessages