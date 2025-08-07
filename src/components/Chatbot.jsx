import React from 'react'
import Sidebar from './Sidebar'
import Chatbotcentre from './Chatbotcentre'

const Chatbot = () => {
  return (
    <div>
        <div className='flex' >
            <Sidebar/>
            <Chatbotcentre/>
          </div>
        </div>
  )
}

export default Chatbot