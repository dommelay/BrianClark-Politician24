import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoCarousel: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        
            <Slider {...settings}>
                <div>
                    <img src='/images/fam2.jpg' alt='family photo' className='w-full h-auto'/>
                </div>
                <div>
                    <img src='/images/fam1.jpg' alt='family photo' className='w-full h-auto'/>
                </div>
                <div>
                    <img src='/images/fam3.jpg' alt='family photo' className='w-full h-auto'/>
                </div>
                <div>
                    <img src='/images/fam4.jpg' alt='family photo' className='w-full h-auto'/>
                </div>
                <div>
                    <img src='/images/fam5.jpg' alt='family photo' className='w-full h-auto'/>
                </div>
            </Slider>
      
    )
}

export default PhotoCarousel;