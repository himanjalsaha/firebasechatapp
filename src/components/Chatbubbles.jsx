import React from 'react'
import Message from './Message'
const Chatbubbles = () => {
    const messages = [
        {
            id:1,
            text:"hi",
            name:"himu"
        },
        {
            id:2,
            text:"hello there",
            name:"john"
        }
    ]
  return (
    <div  className=''>
        {messages.map(message => (
            <Message key={message.id} message={message}/>
        ))}
    </div>
  )
}

export default Chatbubbles