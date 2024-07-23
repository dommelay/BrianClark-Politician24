import React from 'react'
import { useState } from 'react';

const Contact: React.FC = () => {

    // const [donate, setDonate] = useState(false)

    // const handleDonate = () => {
    //     setDonate(!donate);
    // }

    return (
      
            <div className=' bg-blue px-8 py-6 flex items-center justify-center flex-col'>
                <h1 className='italic  text-white mb-2 text-xl sm:text-3xl mr-4 '>Contact Brian</h1>
            <div className=' flex-row  items-center  flex justify-evenly '>
                {/* <h1 className='italic  text-white text-4xl mr-4 '>Contact Brian</h1> */}
                <a href='mailto:contact@brianclarkforsuperior.com' className='mr-4 text-white text-lg hidden sm:block sm:text-2xl font-semibold hover:underline '>contact@brianclarkforsuperior.com</a>
                <a href='mailto:contact@brianclarkforsuperior.com' className='mr-4 text-white text-lg sm:text-2xl block sm:hidden font-semibold hover:underline '>Email</a>
                <a href='https://www.facebook.com/brian.clark.777' className='text-white text-lg sm:text-2xl font-semibold hover:underline mr-3' target='_blank'>Facebook</a>
            
            </div>
            {/* {donate ?
            <div className=' bg-grey mt-4 px-5 py-4'>
                <h1 className=' italic font-semibold text-lg sm:text-2xl'>Donate to Brian Clark's Campaign</h1>
                <div className='flex flex-row items-center justify-center'>
                    <a className='text-blue text-lg  sm:text-2xl font-semibold hover:underline mr-6' href='https://www.paypal.com/donate/?hosted_button_id=KNPM3W83MVMSN' target='_blank'>Paypal</a>
                    <a className='text-blue text-lg  sm:text-2xl font-semibold hover:underline ' href='https://venmo.com/u/clarkfamily0517' target='_blank'>Venmo</a>
                </div>
            </div>:
            <></>} */}
            </div>
    )
}

export default Contact;