import React from 'react'
import Navbar from './Navbar'
import Chatbubbles from './Chatbubbles'
import Sendmessages from './Sendmessages'
const Chatroom = () => {
  return (
    <div  className='bg-neutral-800 h-screen'>
        <Navbar/>
        <Chatbubbles/>
        <Sendmessages/>
        </div>
  )
}

export default Chatroom