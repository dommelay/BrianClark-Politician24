import React from 'react'

const Purpose: React.FC = () => {

    return (
        <div className=''>
            <div className='px-12 py-7'>
                {/* <h1 className='uppercase font-bold text-5xl'>What is my why?</h1>
                <h1 className='mt-1 font-bold text-blue text-3xl'>To Change the Culture in Politics</h1> */}

                <div className='flex flex-row justify-center'>
                    <h1 className='font-bold text-4xl'>My Why?</h1>
                    <h1 className='ml-2 italic font-bold text-5xl  text-blue'>To Change the Culture in Politics</h1>
                </div>

                <div className='flex flex-row mt-6 mb-3 justify-between items-center'>
                <div className='w-1/2 xl:w-2/3 xl:mr-4 mr-2'>
                    <p className='text-left font-semibold'>I’m running for Supervisor because I think we’ve been doing politics wrong for so many years, it has become the most divisive topic in the country. Our elected officials have exploited their power and platform to divide and isolate us, rather than uniting us and encouraging us to seek common ground.</p>
                    <p className='text-left mt-3 font-semibold xl:mt-4'>I believe that politics and media set the tone for how we treat each other and the way people have been treating each other in politics is absolutely disgusting. Agenda’s and sides have taken precedence over the people. You pick a team and if the other person isn’t on your team, then they’re the enemy.</p>
                    <p className='text-left mt-3 font-semibold xl:mt-4'>It doesn’t need to be this way and that’s why I’m running for supervisor. My superpower is bringing people together and I can’t sit back and watch families be destroyed, my neighbors be ignored, and selfish politicians put themselves over the people!</p>
                </div>

             
                    <img className='ml-5 mt-2 w-1/2 h-auto xl:w-1/3'src='/images/purpose.jpg' alt='Brian With Friends'/>
                
                </div>

            </div>
        </div>
    )
}

export default Purpose;
