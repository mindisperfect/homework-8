import React, { Fragment } from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Content from '../footer/Categories'

const Layout = () => {
  return (
    <Fragment>
    <div className="container">
   <Header />
   <Content />
   <main style={{backgroundColor: "#e9e9e9", padding: "10px 10px 30px"}}>
    <Outlet />
   </main>
   <Footer />
    </div>
    </Fragment>
  )
}

export default Layout