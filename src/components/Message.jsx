import React from 'react'

const Message = ({message}) => {
  return (
    <div className='text-black justify-between flex p-5 ' >
    <div class="flex items-start  gap-5">
       <div class="flex flex-col gap-1 w-full max-w-[320px]">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
             <span class="text-sm font-semibold text-gray-900 dark:text-white">{message.name}</span>
             <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
          </div>
          <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
             <p class="text-sm font-normal text-gray-900 dark:text-white"> {message.text}</p>
          </div>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
       </div>
      
      
    </div>
    </div>
  )
}

export default Message