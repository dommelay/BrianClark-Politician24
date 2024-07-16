import React from 'react'

const Fundraiser: React.FC = () => {

    return (
             <div className='bg-grey px-10 py-12 w-full'>
                <div className='flex flex-row'>
                    <img className='w-1/4 h-auto' src='/images/Fundraiser (1).jpg' alt='DMC Fundraiser'/>
                    <div className='w-1/2 mx-10'>
                        <h1 className='uppercase font-bold text-blue text-4xl xl:text-5xl'>Darren McCarty's Comedy & Dinner Fundraiser</h1>
                        {/* <h1 className='mt-1 font-semibold text-blue text-3xl'>For Brian Clark for Supervisor</h1> */}
                        <a href='https://www.eventbrite.com/e/darren-mccartys-comedy-dinner-fundraiser-for-brian-clark-for-supervisor-tickets-936482954727?aff=ebdsoporgprofile' target='_blank' rel='noopener noreferrer'>
                        <button className='py-2 px-4 mt-10 xl:mt-12 text-2xl xl:text-3xl bg-black text-white'>PURCHASE TICKETS</button></a>
                        <h1 className='italic mt-12 xl:mt-16 font-semibold text-2xl'>Wednesday July 24 | South Lyon Hotel | 6pm est </h1>
        
                    </div>
                    <img src='/images/Dmac.jpg' alt='DMAC' className='w-1/4 h-auto'/>
                </div>

               
            </div>
      
    )
}

export default Fundraiser;