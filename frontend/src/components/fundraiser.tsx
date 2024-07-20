import React from 'react'

const Fundraiser: React.FC = () => {

    return (
             <div className='bg-grey px-5 py-8 w-full'>
                <div className='hidden md:block'>
                <div className='flex flex-row'>
                    <img className='w-1/4 h-auto' src='/images/Fundraiser (1).jpg' alt='DMC Fundraiser'/>
                    <div className='w-1/2 mx-2'>
                        <h1 className='uppercase font-bold text-blue text-3xl xl:text-5xl'>Darren McCarty's Comedy & Dinner Fundraiser</h1>
                        <a href='https://www.eventbrite.com/e/darren-mccartys-comedy-dinner-fundraiser-for-brian-clark-for-supervisor-tickets-936482954727?aff=ebdsoporgprofile' target='_blank' rel='noopener noreferrer'>
                        <button className='py-2 px-4 mt-10 xl:mt-12 text-2xl xl:text-3xl bg-black text-white'>PURCHASE TICKETS</button></a>
                        <h1 className='italic mt-12 xl:mt-16 font-semibold text-lg md:text-xl'>Wednesday July 24 | South Lyon Hotel | 6pm est </h1>
        
                    </div>
                    <img src='/images/dmcc.jpeg' alt='DMAC' className='w-1/4 h-auto'/>
                </div>
                </div>


                <div className='block md:hidden'>
                <div className='flex items-center flex-col'>
                    
                   
                    <div className='flex flex-row mb-4'>
                    <img src='/images/dmcc.jpeg' alt='DMAC' className='w-1/2 h-auto'/>
                        <div className='flex w-1/2 ml-4 flex-col'>
                        <h1 className='uppercase  text-lg font-bold text-blue sm:text-3xl'>Darren McCarty's Comedy & Dinner Fundraiser</h1>
                        <a href='https://www.eventbrite.com/e/darren-mccartys-comedy-dinner-fundraiser-for-brian-clark-for-supervisor-tickets-936482954727?aff=ebdsoporgprofile' target='_blank' rel='noopener noreferrer'>
                        <button className='py-1 px-1 mt-5 text-lg bg-black text-white'>PURCHASE TICKETS</button></a>
                        <h1 className='italic mt-6 xl:mt-16 font-semibold text-sm lg:text-lg'>Wednesday July 24 | South Lyon Hotel | 6pm est </h1>
                        </div>
        
                    </div>
                    <img className='w-full' src='/images/Fundraiser (1).jpg' alt='DMC Fundraiser'/>
                </div>
                </div>

               
            </div>
      
    )
}

export default Fundraiser;