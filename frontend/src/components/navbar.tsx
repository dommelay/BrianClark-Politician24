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
                <h1 className="mr-6 text-white font-semibold text-base md:text-lg lg:text-xl"><a href='https://www.paypal.com/donate/?hosted_button_id=KNPM3W83MVMSN' target="_blank" rel="noopener noreferrer">Donate</a></h1>
            </div>
        </div>



    )
}

export default Navbar;