import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from './Icons';

const Header = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(0);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleProducts = () => {
        setProductsDropdownOpen(!productsDropdownOpen);
        setSelectedItem(2);
    };

    const homeClick = () => {
        navigate("/");
        setSelectedItem(0);
        setProductsDropdownOpen(false);
    };

    const aboutClick = () => {
        navigate("/about");
        setSelectedItem(1);
        setProductsDropdownOpen(false);
    };

    const contactClick = () => {
        navigate("/contact");
        setSelectedItem(4);
        setProductsDropdownOpen(false);
    };

    const turnKeyClick = () => {
        navigate("/turnkey-projects");
        setSelectedItem(3);
        setProductsDropdownOpen(false);
    };

    const pharmaMachineClick = () => {
        navigate("/pharma-machine");
        setSidebarOpen(false);
    };

    const chemicalMachineClick = () => {
        navigate("/chemical-machine");
        setSidebarOpen(false);
    };

    const liquidMachineClick = () => {
        navigate("/liquid-machine");
        setSidebarOpen(false);
    };

    const capsuleMachineClick = () => {
        navigate("/capsule-machine");
        setSidebarOpen(false);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setProductsDropdownOpen(false);
    };
    const sideBarclose = (sidebar) => {
        setSidebarOpen(false)
       
   }

    return (
        <>
            <nav>
                <div className='bg-white flex justify-between items-center h-14 px-20 max-md:hidden max-lg:px-6'>
                    <div className='flex gap-4'>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='hover:scale-125 transition duration-500'>
                            <img src="./youtube.svg" alt="YouTube" className='h-9' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61559659838540&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className='hover:scale-125 transition duration-500'>
                            <img src="./facebook.svg" alt="Facebook" className='h-9' />
                        </a>
                        <a href="https://www.instagram.com/universemachworks?igsh=MTBuNmVoNmQya3hhZA==" target="_blank" rel="noopener noreferrer" className='hover:scale-125 transition duration-500'>
                            <img src="./insta.svg" alt="Instagram" className='h-9' />
                        </a>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-black text-[20px] hover:scale-125 transition duration-500 hover:text-blue-500 cursor-pointer'>+91-9888885581</p>
                        <p className='text-black text-[20px] hover:scale-125 transition duration-500 hover:text-blue-500 cursor-pointer'>universemachworks@gmail.com</p>
                    </div>
                </div>
            </nav>

            <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 gap-2">
                <div className="flex-1 flex justify-between items-center">
                    <div className='flex items-center lg:gap-1'>
                        <img src="./logo.png" alt="logo" className='w-28 cursor-pointer hover:scale-125 transition duration-500' />
                        <p className='text-[#108aca] font-extrabold text-[40px] text-center max-lg:text-[25px] max-xl:text-[20px] cursor-pointer hover:scale-110 transition duration-500 text-nowrap max-md:hidden'>Universe Mach Works</p>
                    </div>
                </div>

                <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block" onClick={toggleSidebar}>
                    <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>

                <div className={`lg:flex lg:items-center lg:w-auto w-full ${sidebarOpen ? 'block' : 'hidden'}`} id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-[18px] gap-6 text-gray-700 pt-4 md:pt-0 cursor-pointer">
                            <li className={`cursor-pointer hover:scale-125 transition duration-500 ${selectedItem === 0 ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={homeClick}>HOME</li>
                            <li className={`cursor-pointer hover:scale-125 transition duration-500 ${selectedItem === 1 ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={aboutClick}>ABOUT</li>

                            <li className={`relative cursor-pointer hover:scale-125 transition duration-500 ${selectedItem === 2 ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={handleProducts}>
                                <span>PRODUCTS</span>
                                {productsDropdownOpen && (
                                    <ul className='absolute mt-2 bg-white shadow-md w-60 text-center lg:right-0 lg:transform lg:translate-x-1/2 lg:top-8'>
                                        <li className='text-[19px] py-2 font-semibold text-[#108aca] hover:bg-[#333333] hover:text-white' onClick={pharmaMachineClick}>Pharmaceutical Machine</li>
                                        <li className='text-[19px] py-2 font-semibold text-[#108aca] hover:bg-[#333333] hover:text-white' onClick={chemicalMachineClick}>Chemical Machine</li>
                                        <li className='text-[19px] py-2 font-semibold text-[#108aca] hover:bg-[#333333] hover:text-white' onClick={capsuleMachineClick}>Capsule Machine</li>
                                        <li className='text-[19px] py-2 font-semibold text-[#108aca] hover:bg-[#333333] hover:text-white' onClick={liquidMachineClick}>Liquid Machine</li>
                                    </ul>
                                )}
                            </li>

                            <li className={`cursor-pointer hover:scale-125 transition duration-500 ${selectedItem === 3 ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={turnKeyClick}>TURNKEY-PROJECTS</li>
                            <li className={`cursor-pointer hover:scale-125 transition duration-500 ${selectedItem === 4 ? 'text-blue-600' : ''} hover:text-blue-600`} onClick={contactClick}>CONTACT US</li>
                        </ul>
                    </nav>
                </div>
            </header>

            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
                    <div className="relative bg-white w-64 p-6" onClick={sideBarclose}>
                        <ul className="flex flex-col gap-4 text-gray-700">
                            <li className={`cursor-pointer ${selectedItem === 0 ? 'text-blue-600' : ''}`} onClick={homeClick}>HOME</li>
                            <li className={`cursor-pointer ${selectedItem === 1 ? 'text-blue-600' : ''}`} onClick={aboutClick}>ABOUT</li>
                            <li className={`relative cursor-pointer ${selectedItem === 2 ? 'text-blue-600' : ''}`} onClick={handleProducts}>
                                PRODUCTS
                                {productsDropdownOpen && (
                                    <ul className='mt-2 text-gray-700 text-[18px]'>
                                        <li className='py-2    hover:text-[#108aca]' onClick={pharmaMachineClick}>Pharmaceutical Machine</li>
                                        <li className='py-2    hover:text-[#108aca]' onClick={chemicalMachineClick}>Chemical Machine</li>
                                        <li className='py-2    hover:text-[#108aca]' onClick={capsuleMachineClick}>Capsule Machine</li>
                                        <li className='py-2    hover:text-[#108aca]' onClick={liquidMachineClick}>Liquid Machine</li>
                                    </ul>
                                )}
                            </li>
                            <li className={`cursor-pointer ${selectedItem === 3 ? 'text-blue-600' : ''}`} onClick={turnKeyClick}>TURNKEY-PROJECTS</li>
                            <li className={`cursor-pointer ${selectedItem === 4 ? 'text-blue-600' : ''}`} onClick={contactClick}>CONTACT US</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
