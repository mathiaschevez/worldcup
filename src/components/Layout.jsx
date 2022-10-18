import React from 'react'
import Topbar from './Topbar'


const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout