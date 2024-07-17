import React from 'react'

const Plan: React.FC = () => {

    return (
        <div className='bg-grey px-12 py-10'>
            <div className='flex flex-col lg:flex-row lg:justify-center'>
                <h1 className='font-bold text-xl lg:text-4xl'>My Plan:</h1>
                <h1 className='lg:ml-2 italic font-bold text-2xl lg:text-5xl  text-blue'>Bringing People Together</h1>
            </div>
            <p className='font-semibold text-sm md:text-lg mt-3 lg:mt-7 lg:mx-6 xl:mx-12'>My primary goal is to create a culture where residents feel heard, included, and take pride in who we are! While Superior Township has ample resources, we currently lack sufficient ways to connect with each other. My superpower is bringing people together, and my vision is to foster a stronger sense of community. To achieve this, I plan to:</p>
            <div className='hidden lg:block'>
            <div className='flex flex-row justify-between mt-6 xl:justify-evenly mb-2'>
                <div className='bg-blue w-52 lg:w-60 h-40 flex items-center xl:w-72'>
                    <h1 className='text-white font-semibold px-4'>Facilitate connections between seasoned business owners and young
                    aspiring entrepreneurs to foster mentorship and growth.</h1>
                </div>
                <div className='bg-blue w-52 lg:w-60 h-40 flex items-center xl:w-72'>
                    <h1 className='text-white font-semibold px-4'>Host weekly concerts in the park to provide a regular, informal gathering
                    space for all community members.</h1>
                </div>
                <div className='bg-blue w-52 lg:w-60 h-40 flex items-center xl:w-72'>
                    <h1 className='text-white font-semibold xl:px-4'>Offer ongoing workshops and classes on topics such as financial literacy,
                    rebuilding credit, networking, and entrepreneurship.</h1>
                </div>
                <div className='bg-blue w-52 lg:w-60 h-40 flex items-center xl:w-72'>
                    <h1 className='text-white font-semibold xl:px-4'>Develop youth programs that teach essential skills, ranging from farming to
                    starting a business.</h1>
                </div>
            </div>
            </div>

            <div className='block lg:hidden'>
            <div className='flex flex-col w-full mt-3 items-center '>
                <div className='bg-blue flex items-center  w-full justify-center p-3 mb-2'>
                    <h1 className='text-white text-sm font-semibold px-4'>Facilitate connections between seasoned business owners and young
                    aspiring entrepreneurs to foster mentorship and growth.</h1>
                </div>
                <div className='bg-blue flex items-center w-full justify-center  p-3 mb-2'>
                    <h1 className='text-white text-sm font-semibold px-4'>Host weekly concerts in the park to provide a regular, informal gathering
                    space for all community members.</h1>
                </div>
                <div className='bg-blue flex items-center  w-full p-3 justify-center mb-2 '>
                    <h1 className='text-white text-sm font-semibold xl:px-4'>Offer ongoing workshops and classes on topics such as financial literacy,
                    rebuilding credit, networking, and entrepreneurship.</h1>
                </div>
                <div className='bg-blue flex items-center p-3 justify-center w-full mb-2'>
                    <h1 className='text-white text-sm font-semibold xl:px-4'>Develop youth programs that teach essential skills, ranging from farming to
                    starting a business.</h1>
                </div>
            </div>
            </div>
            <p className='font-semibold italic text-sm md:text-lg  mt-3 lg:mt-7 lg:mx-6 xl:mx-12'>By leveraging local talent and resources, I aim to create vibrant, engaging community activities without straining our budget. My commitment is to build a more connected and supportive Superior Township.</p>
        </div>
    )
}

export default Plan;