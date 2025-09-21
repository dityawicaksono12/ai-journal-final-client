import { createContext, useContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUserData } from "../assets/assets";

// context obj to share state across the app
const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate()

    // Global states
    const [user, setUser ] = useState(null);                                        // logged-in user
    const [chats, setChats ] = useState([]);                                        // all available chats for the user
    const [selectedChat, setSelectedChat ] = useState(null);                          // currently active chats
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');   // App theme (in localStorage)

    // simulate fetching user data
    const fetchUser = async () => {
        setUser(dummyUserData)  // no user -> go to login page
    }

    // simulate fetching chats for a logged-in user
    const fetchUsersChats = async () => {
        setChats(dummyChats)
        setSelectedChat()
    }

    // apply dark mode class to <html> when theme changes
    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme)
    },[theme])

    // whenever user changes, fetch/reset chats accordingly
    useEffect(() => {
        if(user){
            fetchUsersChats()
        }
        else {
            setChats([])
            setSelectedChat(null)
        }
    },[user])

    // On mount, fetch the initial user
    useEffect(() => {
        fetchUser()
    },[])

    // Expose state and functions to children via context
    const value = {
        navigate, user, setUser, fetchUser, fetchUsersChats, chats, setChats, selectedChat, setSelectedChat, theme, setTheme
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook to consume the AppContext
export const useAppContext = () => useContext(AppContext)