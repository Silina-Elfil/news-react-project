import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';


const mainLayout = () => {
  return (
   <>
   <Header />
   <Outlet />
   </>
  )
}

export default mainLayout
