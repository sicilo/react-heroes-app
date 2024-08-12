import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../common'
import { MarvelPage, DcPage, Search, HeroPage } from '../index'
import { LoginPage } from '../../auth/pages/LoginPage'
import { } from '../pages/Search'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <section className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='search' element={<Search />} />
                    <Route path='hero/:id' element={<HeroPage />} />

                    <Route path='/' element={<Navigate to="marvel" />} />
                </Routes>
            </section>
        </>
    )
}
