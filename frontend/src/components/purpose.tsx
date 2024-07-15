import React from 'react'

const Purpose: React.FC = () => {

    return (
        <div className=''>
            <div className='px-12 py-7'>
                <h1 className='uppercase font-bold text-5xl'>What is my why?</h1>
                <h1 className='mt-1 font-bold text-blue text-3xl'>To Change the Culture in Politics</h1>

                <div className='flex flex-row mt-6 justify-between items-center'>
                <div className='w-[32rem] '>
                    <p className='text-left font-semibold'>I’m running for Supervisor because I think we’ve been doing politics wrong for so many years, it has become the most divisive topic in the country. Our elected officials have exploited their power and platform to divide and isolate us, rather than uniting us and encouraging us to seek common ground.</p>
                    <p className='text-left mt-2 font-semibold'>I believe that politics and media set the tone for how we treat each other and the way people have been treating each other in politics is absolutely disgusting. Agenda’s and sides have taken precedence over the people. You pick a team and if the other person isn’t on your team, then they’re the enemy.</p>
                    <p className='text-left mt-2 font-semibold'>It doesn’t need to be this way and that’s why I’m running for supervisor. My superpower is bringing people together and I can’t sit back and watch families be destroyed, my neighbors be ignored, and selfish politicians put themselves over the people!</p>
                </div>

             
                    <img className='ml-5 mt-2 w-[32rem]'src='/images/purpose.jpg' alt='Brian With Friends'/>
                
                </div>

            </div>
        </div>
    )
}

export default Purpose;
