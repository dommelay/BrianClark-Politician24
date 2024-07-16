import React from 'react'

const About: React.FC = () => {

    return (
        <div className='mb-32 bg-grey px-12 py-12'>

            <div className='flex flex-row justify-center xl:items-center'>
                <div className='w-1/2 ml-4 max-w-25 md:mr-16 mr-10'>
                    <img src='/images/solo.jpg' alt='Brian Headshot'></img>
                </div>
                <div className='w-1/2 flex flex-col items-center'>
                    <h1 className='text-5xl font-bold'>Who Am I?</h1>
                    <h1 className='text-4xl font-bold text-blue mt-4 mb-6 italic'>A God fearing family man who makes many mistakes but believes in doing the right thing!</h1>
                    <p className='font-semibold text-base xl:text-lg'>I’ll bring a unique blend of education and hands-on expertise to the role of Supervisor, while restoring your faith in local politcs. My wife and I successfully founded and operate our own insurance company, showcasing my entrepreneurial and managerial skills. I serve on the board of a leadership and personal development nonprofit, where I contribute to strategic planning and community outreach. <br></br><br></br>Additionally, I teach personal development and public speaking courses in high schools and have pioneered Reaching Higher classes in multiple jail facilities, partnering with Ignite. My dedication to fostering growth and leadership in individuals and businesses alike has been demonstrated through these varied roles. My comprehensive background in business, leadership, and community service equips me with the vision and experience needed to effectively serve and lead our township.</p>
                </div>
            </div>

        </div>
    )
}

export default About;