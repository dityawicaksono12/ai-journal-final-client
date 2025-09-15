import React from 'react'
import { useAppContext } from '../context/AppContext'

const ChatBox = () => {
  // Context: active chat + theme
  const {selectedChat, theme} = useAppContext()

  // Local state: messages + loading flag
  const [message, setmessages] = useState([])
  const [loading, setLoading] = useState(false)
  

  return (
    <div>
      ChatBox
    </div>
  )
}

export default ChatBox
