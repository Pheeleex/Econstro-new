import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = ({savedInCart}) => {
  return (
    <div>
      <div className='purple purple-box'></div>
        <Navbar savedInCart={savedInCart} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout