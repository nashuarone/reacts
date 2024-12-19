import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProps {
  user: null | string
  signin: (newUser: string, callback: () => void) => void
  signout: (callback: () => void) => void
}

const AuthContext = createContext({} as AuthContextProps)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<null | string>(() => localStorage.getItem('user') || null)

  const signin = (newUser: string, callback: () => void) => {
    setUser(newUser)
    localStorage.setItem('user', newUser)
    callback()
  }

  const signout = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem('user')
    callback()
  }

  const value = {
    user,
    signin,
    signout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
