import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiFlowerStar } from "react-icons/gi";

const CoreValue = () => {
    return (
        <>
            <p className='text-[#333333] text-3xl font-semibold text-center mt-12'>Our Core Value</p>
            
            <div className='grid grid-cols-4 max-md:grid-cols-2 max-md:gap-10 lg:px-20  pt-10'>

        
            <div className='flex  justify-center items-center flex-col'>
                <div className='h-40 w-40  bg-[#4ea4a5] rounded-full flex items-center justify-center  max-md:h-24 max-md:w-24 hover:scale-110 transition duration-500 hover:bg-[#108aca] ' >
                    <FaHome className='text-white size-20 max-md:size-12 ' />

                </div>
                    <p className='text-[18px] text-[#333333] pt-2 pb-5 max-md:text-[17px]'>
                    Great Services
                  
                </p>
                <div className='h-1 w-10 bg-gray-500 '></div>
            </div>
    
            <div className='flex  justify-center items-center flex-col'>
                <div className='h-40 w-40  bg-[#4e6da5] rounded-full flex items-center justify-center hover:scale-110 transition duration-500 hover:bg-[#108aca] max-md:h-24 max-md:w-24' >
                    <GiFlowerStar className='text-white size-20 max-md:size-12 ' />

                </div>
                <p className='text-[18px] text-[#333333] pt-2 pb-5 max-md:text-[17px]'>
                Highest Standards
                </p>
                <div className='h-1 w-10 bg-gray-500 '></div>
            </div>
    
            <div className='flex  justify-center items-center flex-col'>
                <div className='h-40 w-40  bg-[#f6722a] rounded-full flex items-center justify-center hover:scale-110 transition duration-500 hover:bg-[#108aca] max-md:h-24 max-md:w-24' >
                    <BsFillPeopleFill className='text-white size-20 max-md:size-12 ' />

                </div>
                <p className='text-[18px] text-[#333333] pt-2 pb-5 max-md:text-[17px]'>
                    Professional Team
                </p>
                <div className='h-1 w-10 bg-gray-500 '></div>
            </div>
    
            <div className='flex  justify-center items-center flex-col'>
                <div className='h-40 w-40  bg-[#a7cf47] rounded-full flex items-center justify-center hover:scale-110 transition duration-500 hover:bg-[#108aca] max-md:h-24 max-md:w-24' >
                    <FaRegLightbulb className='text-white size-20 max-md:size-12' />

                </div>
                <p className='text-[18px] text-[#333333] pt-2 pb-5 max-md:text-[17px]'>
                    TurnKey Solutions
                </p>
                <div className='h-1 w-10 bg-gray-500 '></div>
                </div>
                </div>
    
        </>
    )
}

export default CoreValue