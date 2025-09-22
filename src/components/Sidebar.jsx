import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Sidebar = () => {
    // Consume global state from AppContext
    const {chats, selectedChat, theme, setTheme, user} = useAppContext()

    // Local search input state (for future search functionality)
    const [search, setSearch] = useState('')

  return (
    // Sidebar container with dark-mode aware styling
    <div className='flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#2421241/30 to-[#0000001/30 border-r border-[#80609F1/30 backdrop-blur-3x1 transition-all duration-500 max-md:absolute left-0 z-1'>
      {/* Logo switches based on current theme */}
      <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt="" className='w-full max-w-48'/>
    
      {/* New Chat Button */}
      <button className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer'>
        <span className='mr-2 text-x1'>+</span> New Chat
      </button>

      {/* Input to search conversation */}
      <div className='flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-md'>
        <img src={assets.search_icon} className='w-4 not-dark:invert' alt="" />
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder='Search conversations' className='text-xs placeholder:text-gray-400 outline-none'/>
      </div>
    </div>
  )
}

export default Sidebar
