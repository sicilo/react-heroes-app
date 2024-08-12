import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {
  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    login('Camilo Mejia')
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <section className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button onClick={onLogin} className='btn btn-primary'>
        Login
      </button>
    </section>
  )
}
