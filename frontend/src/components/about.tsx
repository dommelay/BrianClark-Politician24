import React from 'react'
import PhotoCarousel from './photocarousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About: React.FC = () => {
   
    
    return (
        <div className=' bg-grey px-12 py-12'>

            <div className='flex flex-col lg:flex-row justify-center items-center '>
             
                    
                    <div className=''>
                        <h1 className='text-2xl sm:text-3xl  block lg:hidden font-bold'>Who Am I?</h1>
                        <h1 className='text-xl sm:text-2xl block lg:hidden font-bold text-blue mb-6 italic'>A God fearing family man who makes many mistakes but believes in doing the right thing!</h1>
                    </div>
          

                <div className='w-full  lg:w-2/3 lg:ml-4 max-w-25  xl:mr-16 lg:mr-10'>
                    <img src='/images/solo.jpg' alt='Brian Headshot'></img>
                </div>

                <div className='w-full lg:w-1/2 flex flex-col items-center'>
                    <h1 className='hidden lg:block text-3xl lg:text-4xl font-bold'>Who Am I?</h1>
                    <h1 className='hidden lg:block text-2xl lg:mt-3 lg:text-3xl font-bold text-blue mb-6 italic'>A God fearing family man who makes many mistakes but believes in doing the right thing!</h1>
                    <p className=' mt-3 lg:mt-0 font-semibold text-base xl:text-lg'>I’ll bring a unique blend of education and hands-on expertise to the role of Supervisor, while restoring your faith in local politcs. My wife and I successfully founded and operate our own insurance company, showcasing my entrepreneurial and managerial skills. I serve on the board of a leadership and personal development nonprofit, where I contribute to strategic planning and community outreach. </p><p className='  font-semibold text-base xl:text-lg mt-2'>Additionally, I teach personal development and public speaking courses in high schools and have pioneered Reaching Higher classes in multiple jail facilities, partnering with Ignite. My dedication to fostering growth and leadership in individuals and businesses alike has been demonstrated through these varied roles. My comprehensive background in business, leadership, and community service equips me with the vision and experience needed to effectively serve and lead our township.</p>
                  
                </div>
               
                  
            </div>

        

        </div>
    )
}

export default About;