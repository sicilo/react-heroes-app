import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext)
    const { pathname, search } = useLocation()
    console.log({ pathname, search })

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath)

    return authState.logged ? children : <Navigate to="/login"></Navigate>
}
