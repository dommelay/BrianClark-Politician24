import React from 'react'

const Change: React.FC = () => {

    return (
        <div className='px-10 py-12'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:mb-2 font-bold text-lg md:text-2xl lg:text-4xl'>The Change Thats Coming</h1>
                    <h1 className='md:ml-2 italic font-bold text-xl md:text-3xl lg:text-4xl  text-blue'>The divisiveness within our governing body, resulting in negative press, lawsuits, and charges against board members</h1>
                </div>

                <div className='mt-3 md:mt-7 flex flex-col md:flex-row items-center'>
                <img className='w-3/4 md:order-1 md:w-1/2 ' src='/images/pray.jpg' alt='change'/>
                    <div className='md:mr-8 '>
                        <p className='m-3 md:text-left font-semibold text-sm lg:text-lg'>This misrepresentation undermines the trust of our residents. My mission will be to restore faith and integrity in our office, ensuring residents know we are here to serve them. To achieve this, I will:</p>
                        <div className='flex items-start mt-3'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold text-sm lg:text-lg ml-2'>Promote transparency by regularly updating the community on board activities and decisions.</li>
                        </div>
                        <div className='flex items-start mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold text-sm lg:text-lg ml-2'>Foster open communication through town hall meetings and accessible forums for resident input.</li>
                        </div>
                        <div className='mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold text-sm lg:text-lg ml-2'>Implement strict ethical standards and accountability measures for all board members.</li>
                        </div>
                        <div className=' mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold text-sm lg:text-lg ml-2'>Highlight and support the positive contributions of our residents, showcasing the good happening in Superior Township.</li>
                        </div>
                        <div className='flex items-start mt-2'>
                            {/* <img className='w-6 h-auto' src='/images/check.png' alt='check mark'/> */}
                            <li className='text-left font-semibold text-sm lg:text-lg ml-2'>Leverage our differences to make us stronger, rather than divide us.</li>
                        </div>
                        
                    </div>
                    
                </div>
                <p className=' italic text-md md:text-lg lg:text-xl mt-4 font-bold text-blue'>By focusing on integrity, transparency, and community engagement, I aim to rebuild trust and ensure our governing body truly represents and serves the people of Superior Township.</p>
               
        </div>
    )
}


export default Change;