import React, { useEffect, useState } from 'react'
import Message from './Message'
import { QuerySnapshot, collection, doc, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../Firebase'
const Chatbubbles = () => {
   const [ messages , setMessages] = useState([])

    useEffect(()=>{
        const q = query(
            collection(db , "messages"),
            orderBy("createdat"),
            limit(50),
        )
        const unsub = onSnapshot(q,(QuerySnapshot)=>{
            const messages = [];
            QuerySnapshot.forEach((doc)=>{
                // messages.push(doc.data().name);
                messages.push({...doc.data() , id: doc.id})
              
            });
            setMessages(messages)
            console.log(messages);
        })
        return ()=>  unsub;
    
    },[])
  return (
    <div  className=' overflow-auto'>
        {messages.map(message => (
            <Message key={message.id} message={message}/>
        ))}
    </div>
  )
}

export default Chatbubbles