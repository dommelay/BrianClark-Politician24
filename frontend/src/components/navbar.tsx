import React from 'react'

const Navbar: React.FC = () => {

    return (

        <div className="bg-blue h-12 md:h-16 flex items-center sticky top-0 z-50">
            <div className="flex flex-row ml-auto">
                <h1 className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl">Purpose</h1>
                <h1 className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl">Plan</h1>
                <h1 className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl">Vision</h1>
                <h1 className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl">About</h1>
                <h1 className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl">Contact</h1>
                <h1 className="mr-6 text-white font-semibold text-base md:text-lg lg:text-xl"><a href='https://www.eventbrite.com/o/brian-clark-for-supervisor-of-superior-twp-87582323563' target="_blank" rel="noopener noreferrer">Donate</a></h1>
            </div>
        </div>

    //   <div className='bg-blue h-10 flex items-center sticky top-0 z-50'>
    //     <div className='flex flex-row ml-auto'>
    //         <h1 className='mr-3 text-white font-semibold'>Purpose</h1>
    //         <h1 className='mr-3 text-white font-semibold'>Plan</h1>
    //         <h1 className='mr-3 text-white font-semibold'>About</h1>
    //         <h1 className='mr-3 text-white font-semibold'>Contact</h1>
    //         <h1 className='mr-3 text-white font-semibold'>Donate</h1>
    //     </div>
    //   </div>

    )
}

export default Navbar;