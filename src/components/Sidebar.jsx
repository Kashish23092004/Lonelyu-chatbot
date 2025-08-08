import React from 'react'
import { Plus, MessageSquare, Library } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen justify-between w-80 bg-black text-green-200 p-4">
      {/* NEW CHAT Button */}
      <button className="btn btn-block bg-gradient-to-r from-green-700 to-black text-white border-none shadow-md flex items-center gap-2 mt-2 mb-6">
        <Plus /> NEW CHAT
      </button>
      {/* Menu List */}
      <ul className="menu flex-grow bg-transparent">
        <li className="mt-4">
          <a className="flex items-center gap-2 hover:bg-green-900 hover:text-white transition">
            <MessageSquare /> Search chat
          </a>
        </li>
        <li className="mt-4">
          <a className="flex items-center gap-2 hover:bg-green-900 hover:text-white transition">
            <Library /> Library
          </a>
        </li>
      </ul>
      {/* Profile Section at Bottom */}
      <div className="w-full py-4 flex items-center gap-3 bg-green-950 rounded mt-4">
        <div className="avatar">
          <div className="w-10 rounded-full mt-2">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="Avatar" />
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-sm font-bold text-white font-sans">KASHISH</div>
          <div className="text-sm text-green-300 font-bold font-sans">view profile</div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
