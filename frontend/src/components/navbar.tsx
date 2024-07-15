import React from 'react'

const Navbar: React.FC = () => {

    return (

      <div className='bg-blue h-10 flex items-center sticky top-0 z-50'>
        <div className='flex flex-row ml-auto'>
            <h1 className='mr-3 text-white font-semibold'>Purpose</h1>
            <h1 className='mr-3 text-white font-semibold'>Plan</h1>
            <h1 className='mr-3 text-white font-semibold'>About</h1>
            <h1 className='mr-3 text-white font-semibold'>Contact</h1>
            <h1 className='mr-3 text-white font-semibold'>Donate</h1>
        </div>
      </div>

    )
}

export default Navbar;