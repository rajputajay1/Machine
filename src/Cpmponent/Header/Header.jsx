import React from 'react'
import Icons from './Icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState(0);
    const [productsDropdownOpen, setpPductsDropdownOpen] = useState(false);

    const handleProducts = () => {
        setpPductsDropdownOpen(!productsDropdownOpen)
        setSelectedItem(2);


    }


    const HomeClick = () => {
        navigate("/")
        setSelectedItem(0);

    }

    const aboutClick = () => {
        navigate("/about")
        setSelectedItem(1);

    }
    const contectClick = () => {
        navigate("/contact")
        setSelectedItem(4);

    }
    const turnKeyClick = () => {
        navigate("/turnkey-projects")
        setSelectedItem(3);

    }
    const pharmaMachineClick = () => {
        navigate("/pharma-machine")

    }
    const chemicalMachineClick = () => {
        navigate("/chemical-machine")

    }
    const liquidMachineClick = () => {
        navigate("/liquid-machine")

    }
    const capsuleMachineClick = () => {
        navigate("/capsule-machine")

    }
    return (
        <>

            <nav className=''>
                <div className='bg-white flex justify-between items-center h-14 px-16 max-md:hidden max-lg:px-6   '>
                    <div className='flex gap-10'>
                        <p className='text-black text-[18px] '>9888885581</p>
                        <p className='text-black text-[18px] '>universemachworks@gmail.com
                        </p>
                    </div>
                    <Icons></Icons>


                </div>

            </nav>
            <header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 ">

                <div class="flex-1 flex justify-between items-center">
                    <img src="./logo.png" alt="" className='w-28' />
                    {/* <a href="#" class="text-3xl">Company</a> */}
                </div>

                <label for="menu-toggle" class="pointer-cursor md:hidden block">
                    <svg class="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul class="md:flex items-center justify-between text-[18px] gap-6 text-gray-700 pt-4 md:pt-0 cursor-pointer">
                            <li className={`cursor-pointer ${selectedItem === 0 ? 'text-blue-600' : ''
                                } hover:text-blue-600`} onClick={HomeClick}>HOME</li>

                            <li className={`cursor-pointer ${selectedItem === 1 ? 'text-blue-600' : ''
                                } hover:text-blue-600`} onClick={aboutClick}>ABOUT</li>
                            <div className='reltive'>

                                <li className={`cursor-pointer ${selectedItem === 2 ? 'text-blue-600' : ''
                                    } hover:text-blue-600`} onClick={handleProducts}>PRODUCTS</li>

                                {productsDropdownOpen && (
                                    <div className='absolute right-[12%] top-36 transform -translate-x-1/2 bg-white shadow-md w-60 text-center' onClick={handleProducts}>
                                        <p
                                            className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-[#333333] hover:text-white'
                                            onClick={pharmaMachineClick}      >
                                           Pharmaceutical Machine
                                        </p>

                                        <hr />
                                        <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-[#333333] hover:text-white' onClick={chemicalMachineClick}>
                                            Chemical Machine
                                        </p>
                                        <hr />
                                        <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-[#333333] hover:text-white' onClick={capsuleMachineClick} >
                                            Capsule Machine
                                        </p>
                                        <hr />
                                        <p className='text-[19px] py-2 font-semibold text-yellow-400 hover:bg-[#333333] hover:text-white' onClick={liquidMachineClick}>
                                            Liquid Machine
                                        </p>
                                        <hr />

                                    </div>
                                )}
                            </div>

                            <li className={`cursor-pointer ${selectedItem === 3 ? 'text-blue-600' : ''
                                } hover:text-blue-600`} onClick={turnKeyClick}>TURNKKEY-PROJECTS</li>
                            <li className={`cursor-pointer ${selectedItem === 4 ? 'text-blue-600' : ''
                                } hover:text-blue-600`} onClick={contectClick}>CONTACT US</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header