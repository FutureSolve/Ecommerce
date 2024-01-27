import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"
// import {Outlet  } from 'react-router-dom';


const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
      {/* <Outlet></Outlet> */}
    </>
  )
}

export default Header
