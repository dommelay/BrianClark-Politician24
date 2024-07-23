import React from 'react';

const Donate: React.FC = () => {

    return (
        
            <div className='w-full bg-grey  px-5 pt-6 pb-10'>
                <h1 className=' italic font-semibold mb-2 text-lg sm:text-3xl'>Donate to Brian Clark's Campaign</h1>
                <div className='flex flex-row items-center justify-center'>
                    <a className='text-blue text-lg  sm:text-2xl font-semibold hover:underline mr-6' href='https://www.paypal.com/donate/?hosted_button_id=KNPM3W83MVMSN' target='_blank'>Paypal</a>
                    <a className='text-blue text-lg  sm:text-2xl font-semibold hover:underline mr-6' href='https://cash.app/$BCforSuperior' target='_blank'>CashApp</a>
                    <a className='text-blue text-lg  sm:text-2xl font-semibold hover:underline ' href='https://venmo.com/u/clarkfamily0517' target='_blank'>Venmo</a>
                </div>
            </div>
     
    )
}
export default Donate;