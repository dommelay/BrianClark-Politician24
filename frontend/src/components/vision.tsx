import React from 'react'

const Vision: React.FC = () => {

    return(
        <div className='py-10 px-12'>
                <div className='flex flex-row justify-center'>
                    <h1 className='font-bold text-4xl'>I Believe:</h1>
                    <h1 className='ml-2 italic font-bold text-5xl  text-blue'>We're Superior Together</h1>
                </div>

                <div className='my-8 flex flex-row justify-center '>
                    <img className='w-1/2 'src='/images/UM.jpg' alt='Brian and Angie with University of Michigan Cheerleaders'/>
                    <div className='ml-6'>
                        <p className='text-left font-semibold xl:text-lg'>The greatest asset of Superior Township is its people. Our residents are amazing, caring, and committed to the greater good. We look out for each other, care about the environment, and strive to make our community better. Our second greatest asset is our land (Greenspace). Superior Township is a beautiful place with nature preserves, a rare commodity in an era of rapid development. My plan to help the community thrive involves elevating and promoting these
                        assets. I will:</p>
                        {/* <p className='mt-5 font-semibold'></p> */}
                        <div className='flex items-start mt-4'>
                            <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/>
                            <h1 className='text-left font-semibold text-lg ml-2'>Showcase the talents and businesses of our residents, while creating events
                            and space for mom-and-pop shops.</h1>
                        </div>
                        <div className='flex items-start mt-2'>
                            <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/>
                            <h1 className='text-left font-semibold text-lg ml-2'>Organize events such as concerts, craft shows, and community gatherings to
                            draw people to our beautiful parks.</h1>
                        </div>
                        <div className='flex items-start mt-2'>
                            <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/>
                            <h1 className='text-left font-semibold text-lg ml-2'>Develop community gardens and promote camping opportunities to encourage outdoor activities and environmental stewardship.</h1>
                        </div>
                        <div className='flex items-start mt-2'>
                            <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/>
                            <h1 className='text-left font-semibold text-lg ml-2'>Youth camps, facilitating enrichment and learning.</h1>
                        </div>

                    </div>
                    
                </div>
                <p className='text-xl font-bold text-blue italic'>By highlighting our people and preserving our natural beauty, we can foster a thriving, connected, and vibrant community in Superior Township. We're Superior together!</p>

        </div>
    )
}

export default Vision;