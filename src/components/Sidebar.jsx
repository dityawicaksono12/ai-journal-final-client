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
    </div>
  )
}

export default Sidebar
