import AppContext from "./app-context";
import { useState, useCallback } from "react";

let preloadUser = localStorage.getItem('user_data')
if (preloadUser) preloadUser = JSON.parse(preloadUser)
else preloadUser = {name: '', id: '', tasks: []}

const AppProvider = ({children}) => {

    const [user, setUser] = useState(preloadUser)

    const updateUser = useCallback((user) => {
    
        setUser(user)

        if (user.id === '') localStorage.removeItem('user_data')
        else localStorage.setItem('user_data', JSON.stringify(user))
    })

    const value = { user, updateUser }

    const Provider = AppContext.Provider

    return <Provider value={value}>{children}</Provider>
}

export default AppProvider