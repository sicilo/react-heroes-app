import React from 'react'
import { AppRouter } from './router/Approuter'
import { AuthProvider } from './auth'

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    )
}
