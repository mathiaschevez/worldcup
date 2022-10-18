import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

const Topbar = () => {
  const [menuActive, setMenu] = useState(false)

  return (
    <div className='w-full'>
      <div className='bg-dark py-3 px-3 flex items-center justify-between'>
        <h1 className='text-light font-bold'>Logo</h1>
        <button
          className='bg-maroon py-3 px-3 rounded-lg'
          onClick={() => setMenu(!menuActive)}
        >
          <FiMenu color='#F3F3F4' size={24}/>
          {/* menu here */}
        </button>
      </div>
      {menuActive && <Menu />}
    </div>

  )
}

const Menu = () => (
  <div className='absolute bg-maroon text-light py-3 px-6 right-0'>
    <div>
      <h1>Home</h1>
      <h1>My Brackets</h1>
      <h1>Settings</h1>
    </div>
  </div>
)

export default Topbar