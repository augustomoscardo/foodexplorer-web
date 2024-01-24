import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { useEffect } from 'react'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  console.log(data);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password }, { withCredentials: true })

      const { user } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

      setData({ user })
    } catch (err) {
      if (err.response) {
        alert(err.response.message)
      } else {
        alert('Não foi possível fazer o login.')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user')
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')

    if (user) {
      setData({
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}