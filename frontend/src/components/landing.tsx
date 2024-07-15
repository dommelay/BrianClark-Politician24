import React from 'react'

const Landing: React.FC = () => {


    return (
        <>

            <div className='relative max-w-6xl mx-auto'>

                <img className='w-full  h-full object-cover ' src='/images/landing.jpg' alt='Brian Clarks Family'/>

                <div className="absolute inset-0 flex flex-col items-center text-white bg-black bg-opacity-25">
                    <h1 className='text-5xl md:text-7xl font-bold mt-1'>Brian Clark</h1>
                    <h1 className='text-4xl md:text-6xl font-bold'>Superior Township</h1>
                </div>

                <div className="absolute w-full bottom-0 text-center p-4">
                    <p className="text-white font-bold text-sm md:text-lg lg:text-xl max-w-3xl mx-auto"> "By focusing on integrity, transparency, and community engagement, I aim to rebuild trust and ensure our governing body truly represents and serves the people of Superior Township."
                    </p>
                </div>

            </div>

        </>
    
    )
}

export default Landing;