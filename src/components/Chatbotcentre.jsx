import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Mic, SendHorizontal } from 'lucide-react'
import { URL } from '../config/geminiapi'
const Chatbotcentre = () => {
const [questions, setquestions] = useState('')
const sendq=async()=>{
  const payload={
    "contents": [
      {
        "parts": [
          {
            "text": questions
          }
        ]
      }
    ]
  }
  try{
    let response = await fetch(URL,{
        method:"POST",
        headers:{
         "content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    if(!response.ok){
         const errorData = await response.json();
         console.error('Error:',errorData);
         exit;
         
    }
  
    const data = await response.json();
    console.log(response)
}
catch(error){
  console.error('Fetch error:',error);
}
}

    return (
        <div>
            <div className='text-2xl font-normal font-serif m-80'>Hello there! What you want to talk about....</div>
            <div className='h-0.5'>
                <div className='flex items-center rounded-2xl px-3 py-4 w-full max-w-4xl ml-40 mt-72 bg-gray-700'>
                    <div className="dropdown dropdown-top">
                        <div tabIndex={0} role="button" className="text-white hover:text-gray-700 p-2 rounded-full"><Plus size={18} /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                            <li><a>upload a file</a></li>
                            <li><a>upload videos</a></li>
                            <li><a>connect your github</a></li>
                        </ul>
                    </div>
                    <input type='text' value={questions} onChange={(event)=>setquestions(event.target.value)} placeholder='type your text here!' className='bg-transparent flex-1 mx-4  outline-none text-whiterounded-2xl w-full'>
                    </input>
                    <button className='text-white hover:text-gray-600 mr-3.5'><Mic size={18} /></button>
                    <button  onClick={sendq}className='text-white hover:text-gray-600 '><SendHorizontal size={18} /></button>
                </div>
            </div>
        </div>
    )
}

export default Chatbotcentre