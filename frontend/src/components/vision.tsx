import React from 'react'

const Vision: React.FC = () => {

    return(
        <div className='py-10 px-10'>
                <div className='flex flex-col md:flex-row justify-center'>
                    <h1 className='font-bold text-xl sm:text-3xl'>I Believe:</h1>
                    <h1 className='ml-2 italic font-bold text-3xl sm:text-5xl  text-blue'>We're Superior Together</h1>
                </div>
                <img className='w-full mt-3 sm:mt-6 block lg:hidden'src='/images/UM.jpg' alt='Brian and Angie with University of Michigan Cheerleaders'/>

                <div className='my-4 flex flex-row justify-center '>
                    <img className='w-1/2 hidden lg:block'src='/images/UM.jpg' alt='Brian and Angie with University of Michigan Cheerleaders'/>
                    <div className='lg:ml-6'>
                        <p className='text-left font-semibold xl:text-lg'>The greatest asset of Superior Township is its people. Our residents are amazing, caring, and committed to the greater good. We look out for each other, care about the environment, and strive to make our community better. Our second greatest asset is our land (Greenspace). Superior Township is a beautiful place with nature preserves, a rare commodity in an era of rapid development. My plan to help the community thrive involves elevating and promoting these
                        assets. I will:</p>
                        {/* <p className='mt-5 font-semibold'></p> */}
                        <div className='flex items-start mt-2 md:mt-4'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold sm:text-lg ml-2'>Showcase the talents and businesses of our residents, while creating events
                            and space for mom-and-pop shops.</li>
                        </div>
                        <div className='flex items-start md:mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold sm:text-lg ml-2'>Organize events such as concerts, craft shows, and community gatherings to
                            draw people to our beautiful parks.</li>
                        </div>
                        <div className='flex items-start md:mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold sm:text-lg ml-2'>Develop community gardens and promote camping opportunities to encourage outdoor activities and environmental stewardship.</li>
                        </div>
                        <div className='flex items-start md:mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold sm:text-lg '>Youth camps, facilitating enrichment and learning.</li>
                        </div>

                    </div>
                    
                </div>
                <p className='text-lg sm:text-xl font-bold text-blue italic'>By highlighting our people and preserving our natural beauty, we can foster a thriving, connected, and vibrant community in Superior Township. We're Superior together!</p>

        </div>
    )
}

export default Vision;