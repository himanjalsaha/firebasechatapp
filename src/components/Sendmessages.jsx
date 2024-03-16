import React, { useState } from 'react';
import { UserAuth } from '../context/Authcontext';
import { setDoc, doc, serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase';

const Sendmessages = () => {
    const [value, setvalue] = useState("");
    const { currentuser } = UserAuth(); // Corrected from currentuser to currentUser
    console.log(value);

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (value.trim() === ""){
          alert("enetr a valid message")
        }

        try {
           
            const { uid, displayName, photoURL } = currentuser;
            await addDoc(collection(db,"messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdat: serverTimestamp(),
                uid
            });
            console.log("Message added successfully!");
        } catch (error) {
            console.error("Error adding message:", error);
        }
        setvalue("");
    };

    return (
        <div className='bottom-0 bg-gray-300 p-2 rounded-lg shadow-md fixed w-full '>
            <form onSubmit={handlesubmit} className='flex flex-row'>
                <input
                    value={value}
                    required
                    onChange={e => setvalue(e.target.value)}
                    type="text"
                    className='w-full p-4 bg-neutral-800 text-white rounded-l-lg outline-none'
                    placeholder='Enter your message'
                />
                <button type='submit' className='bg-neutral-600 p-4 text-white rounded-r-lg'>Send</button>
            </form>
        </div>
    );
};

export default Sendmessages;
