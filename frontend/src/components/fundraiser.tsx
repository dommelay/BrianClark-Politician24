import React from 'react'

const Fundraiser: React.FC = () => {

    return (
             <div className='bg-grey px-12 py-14 w-full'>
                <div className='flex flex-row'>
                    <img className='w-72 h-auto' src='/images/Fundraiser (1).jpg' alt='DMC Fundraiser'/>
                    <div className='mx-6'>
                        <h1 className='uppercase font-bold text-blue text-5xl'>Darren McCarty's Comedy & Dinner Fundraiser</h1>
                        <h1 className='mt-1 font-semibold text-blue text-3xl'>For Brian Clark for Supervisor</h1>
                        <a href='https://www.eventbrite.com/e/darren-mccartys-comedy-dinner-fundraiser-for-brian-clark-for-supervisor-tickets-936482954727?aff=ebdsoporgprofile' target='_blank' rel='noopener noreferrer'>
                        <button className='py-2 px-4 mt-8 text-2xl bg-black text-white'>PURCHASE TICKETS</button></a>
                        {/* <h1 className='mt-2 font-semibold text-2xl'>| South Lyon Hotel | 6pm est </h1> */}
        
                    </div>
                    <img src='/images/Dmac.jpg' alt='DMAC' className='w-72 h-auto'/>
                </div>

               
            </div>
      
    )
}

export default Fundraiser;