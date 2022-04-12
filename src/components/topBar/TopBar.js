import React from 'react'

import './topbar.css'

export const TopBar = () => {

  const handleCloseWindow = () => {
    window.close()
  }

  return (
    <nav className='topbar'>
      <button
        onClick={handleCloseWindow}
      >

      </button>
    </nav>
  )
}