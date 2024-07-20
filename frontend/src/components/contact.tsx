import React from 'react'

const Contact: React.FC = () => {

    return (
      
            <div className=' bg-blue px-8 pt-6 pb-10 flex items-center justify-center flex-col'>
                <h1 className='italic block lg:hidden text-white mb-2 text-xl sm:text-3xl mr-4 '>Contact Brian</h1>
            <div className=' flex-row  items-center  flex justify-evenly '>
                <h1 className='italic hidden lg:block text-white text-4xl mr-4 '>Contact Brian</h1>
                <a href='mailto:contact@brianclarkforsuperior.com' className='mr-3 text-white text-lg hidden sm:block sm:text-2xl font-semibold hover:underline '>contact@brianclarkforsuperior.com</a>
                <a href='mailto:contact@brianclarkforsuperior.com' className='mr-3 text-white text-lg sm:text-2xl block sm:hidden font-semibold hover:underline '>Email</a>
                <a href='https://www.facebook.com/brian.clark.777' className='text-white text-lg sm:text-2xl font-semibold hover:underline mr-3' target='_blank'>Facebook</a>
                <a href='https://www.paypal.com/donate/?hosted_button_id=KNPM3W83MVMSN' target='_blank' className='text-white font-semibold text-lg sm:text-2xl hover:underline'>Donate</a>
            </div>
            </div>
    )
}

export default Contact;