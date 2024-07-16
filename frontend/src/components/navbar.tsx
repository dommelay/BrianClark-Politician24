import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-scroll';

const Navbar: React.FC = () => {

    const [navHeight, setNavHeight] = useState<number>(64);

    useEffect(() => {
        const navElement = document.getElementById('nav');
        if (navElement) {
            setNavHeight(navElement.offsetHeight);
        }
    }, []);

    const handleOffset = () => {
        return -navHeight + 20
    };

    return (

        <div id='nav' className="bg-blue h-12 md:h-16 flex items-center sticky top-0 z-50">
            <div className="flex flex-row ml-auto">
                <Link to="purpose" smooth={true} duration={500} className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl cursor-pointer" offset={handleOffset()}>Purpose</Link>
                <Link to="plan" smooth={true} duration={500} className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl cursor-pointer" offset={handleOffset()}>Plan</Link>
                <Link to="vision" smooth={true} duration={500} className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl cursor-pointer" offset={handleOffset()}>Vision</Link>
                <Link to="about" smooth={true} duration={500} className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl cursor-pointer" offset={handleOffset()}>About</Link>
                <Link to="contact" smooth={true} duration={500} className="mr-4 text-white font-semibold text-base md:text-lg lg:text-xl cursor-pointer" offset={handleOffset()}>Contact</Link>
                <a href='https://www.paypal.com/donate/?hosted_button_id=KNPM3W83MVMSN' target="_blank" rel="noopener noreferrer" className="mr-6 text-white font-semibold text-base md:text-lg lg:text-xl">Donate</a>
            </div>
        </div>



    )
}

export default Navbar;