import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <div className='gradient__bg Main_Container'>
      <Navbar/>
         <div className='Children_container'>
          {children}
         </div>
      <Footer/>
    </div>
  )
}

export default Layout