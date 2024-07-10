import React from 'react'
import NavbarComponent from './shared/NavbarComponent'
import Footer from './shared/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <NavbarComponent />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
