import React from 'react'
import { Plus } from 'lucide-react'
import { MessageSquare } from 'lucide-react'
import { Library } from 'lucide-react'
const Sidebar = () => {
  return (
    <div>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className='flex flex-col h-screen justify-between w-80 bg-base-200 p-4'>
     <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
   <Plus />NEW CHAT
</button>
    <ul className="menu bg-base-200 text-base-content flex-grow">
      {/* Sidebar content here */}

      <li className='mt-5'><a><MessageSquare />Search chat</a></li>
      <li className='mt-5' ><a><Library />library</a></li>
       </ul>
       <div className=' fixed bottom-0 left-0 w-full z-50 rounded-full'>
        <div className=' p-3 bg-zinc-700 text-white items-center gap-3  rounded flex'><div className="avatar">
  <div className="w-10 rounded-full mt-2 ">
    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
</div> <div className='flex flex-col ml-2 '>
         <div className='  text-sm  font-bold font-sans'>KASHISH</div>
        <div className='  text-sm  text-slate-500 font-bold font-sans'>view profile</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Sidebar