import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  let sharedState = {
    /* whatever you want */
  }
  const [pakket, setpakket] = useState('')

  return (
    <AppContext.Provider value={{ pakket, setpakket }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
