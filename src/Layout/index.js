import React from 'react'
import Header from './header'
import Footer from './footer'
import TopNav from './top-nav'

export default function UserLayout({children,page}) {
  return (
    <div>
      
        <Header page={page}/>
        {children}
        <Footer/>
    </div>
  )
}
