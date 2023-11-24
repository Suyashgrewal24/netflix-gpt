import React from 'react'
import LogIn from './LogIn'
import Browse from './Browse'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn/>
    },
    {
      path: '/Browse',
      element: <Browse/>
    }

  ])



  return (
    <div>
       <RouterProvider router = {approuter}/>
    </div>
  )
}

export default Body