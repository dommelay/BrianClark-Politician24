import React from 'react'


const PhotoCarousel: React.FC = () => {

  

    return (
        
        <div className=' mb-10 flex flex-col items-center justify-center p-12'>
            <h1 className='font-bold text-3xl md:text-6xl italic text-blue mb-10'>Meet My Family</h1>
            <div className="flex overflow-x-auto space-x-4 h-64  md:h-96">
                <img src="/images/fam1.jpg" alt="family photo 1" className="w-full rounded-lg" />
                <img src="/images/fam2.jpg" alt="family photo 2" className="w-full rounded-lg" />
                <img src="/images/Ricefam.jpg" alt="family photo 5" className="w-full  rounded-lg" />
                <img src="/images/fam3.jpg" alt="family photo 3" className="w-full rounded-lg" />
                <img src="/images/fam4.jpg" alt="family photo 4" className="w-full  rounded-lg" />
                <img src="/images/fam5.jpg" alt="family photo 5" className="w-full  rounded-lg" />
            </div>
        </div>
      
    )
}

export default PhotoCarousel;