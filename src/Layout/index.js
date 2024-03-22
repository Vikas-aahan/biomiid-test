import React from 'react'
import Header from './header'
import Footer from './footer'
import TopNav from './top-nav'

export default function UserLayout({children}) {
  return (
    <div>
      
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
