import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-scroll';

const Navbar: React.FC = () => {
//bottom nav bar with Brian clark superior township 2024 for mobile view, opaque
    const [navHeight, setNavHeight] = useState<number>(64);

    useEffect(() => {
        const navElement = document.getElementById('nav');
        if (navElement) {
            setNavHeight(navElement.offsetHeight);
        }
    }, []);

    const handleOffset = () => {
        return -navHeight + 15
    };

    return (
       
        <div id='nav' className="bg-blue h-12 md:h-16 flex items-center sticky top-0 z-50">
            <div className='hidden sm:block'>
                <Link to="landing" smooth={true} duration={500} className=" text-white font-semibold  sm:text-xl lg:text-3xl italic cursor-pointer ml-6" offset={handleOffset()}>Brian Clark</Link>
            </div>
            <div className='block sm:hidden'>
                <Link to="landing" smooth={true} duration={500} className=" text-white font-semibold  sm:text-xl  italic cursor-pointer ml-4" offset={handleOffset()}>BC</Link>
            </div>
            <div className="flex flex-row ml-auto">
                <Link to="purpose" smooth={true} duration={500} className="mr-2 sm:mr-4 text-white font-semibold text-sm md:text-lg lg:text-xl cursor-pointer hover:underline" offset={handleOffset()}>Purpose</Link>
                <Link to="plan" smooth={true} duration={500} className="mr-2 sm:mr-4 text-white font-semibold text-sm md:text-lg lg:text-xl cursor-pointer hover:underline" offset={handleOffset()}>Plan</Link>
                <Link to="vision" smooth={true} duration={500} className="mr-2 sm:mr-4 text-white font-semibold text-sm md:text-lg lg:text-xl cursor-pointer hover:underline" offset={handleOffset()}>Vision</Link>
                <Link to="about" smooth={true} duration={500} className="mr-2 sm:mr-4 text-white font-semibold text-sm md:text-lg lg:text-xl cursor-pointer hover:underline" offset={handleOffset()}>About</Link>
                <Link to="contact" smooth={true} duration={500} className="mr-2 sm:mr-4 text-white font-semibold text-sm md:text-lg lg:text-xl cursor-pointer hover:underline" offset={handleOffset()}>Contact</Link>
                <Link to="donate" smooth={true} duration={500} className="mr-2 sm:mr-4 text-white font-semibold text-sm md:text-lg lg:text-xl cursor-pointer hover:underline" offset={handleOffset()}>Donate</Link>
              
            </div>
        </div>

     

    )
}

export default Navbar;