import { useContext, createContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
            {/*  // components inside the ThemeProvider */}
            {children}
        </ThemeContext.Provider>
    )
  
}



export const useTheme = () => useContext(ThemeContext)