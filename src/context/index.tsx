import { createContext, useState } from 'react'

type AuthType = {
  token: string
  user: {
    id: string
    name: string
  }
}

type ContextAuthType = {
  auth: AuthType
  changeAuth: (params: AuthType) => void
}
export const AuthContext = createContext<ContextAuthType | null>(null)

export const Provider = ({ children }: { children: any }) => {
  const localAuthData = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth') || '')
    : {
        token: '',
        user: {
          id: '',
          name: '',
        },
      }

  const [auth, setAuth] = useState(localAuthData)
  const changeAuth = (params: AuthType) => [setAuth(params)]

  return (
    <AuthContext.Provider
      value={{
        auth,
        changeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
