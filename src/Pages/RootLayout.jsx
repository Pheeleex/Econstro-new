import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <div>
      <div className='purple purple-box'></div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout