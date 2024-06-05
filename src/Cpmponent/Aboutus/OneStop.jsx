import React from 'react'
import { useNavigate } from 'react-router-dom'

const OneStop = () => {
    const navigae = useNavigate()
    const viewAllClick = () => {
        navigae("/pharma-machine")
        window.scrollTo(0, 0);

     }

    return (
        <>
            <div className='text-center pt-10 pb-3 '>
                <p className='text-4xl  text-center max-lg:text-2xl font-extrabold '>
                    One Stop Solution

                </p>
                <div className='bg-[#108aca] h-[2px] mt-2 max-lg:mt-1 w-48 mx-auto max-lg:w-40 '></div>
            </div>
            <div className='grid grid-cols-3 gap-5 max-md:px-5 px-20 pt-10 max-lg:grid-cols-2 max-lg:px-4 max-md:grid-cols-1 max-md:gap-7  '>

                <div className='border border-[#108aca]'>
                    <img src="./pharma1.jpg" alt="{product.name}" className='  object-center h-[200px] w-full  max-md:h-[150px]' />
                    <div className=' py-2 max-lg:py-1 text-center cursor-pointer hover:text-[#108aca] my-5'>
                        <p className='text-3xl font-semibold max-lg:text-[18px]'>Pharmaceutical Machine</p>
                    </div>
                </div>
                <div className='border border-[#108aca]'>
                    <img src="./chemical2.jpg" alt="{product.name}" className='  object-center mx-auto h-[200px] w-full  max-md:h-[150px]' />
                    <div className=' py-2 max-lg:py-1 text-center cursor-pointer hover:text-[#108aca] my-5'>
                        <p className='text-3xl font-semibold max-lg:text-[18px]'>Chemical Industrial Machine</p>
                    </div>
                </div>
                <div className='border border-[#108aca]'>
                    <img src="./food.jpg" alt="{product.name}" className='  object-center mx-auto h-[200px] w-full \ max-md:h-[150px]' />
                    <div className=' py-2 max-lg:py-1 text-center cursor-pointer hover:text-[#108aca] my-5 '>
                        <p className='text-3xl font-semibold max-lg:text-[18px]'>Food Industrial Machine</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center pt-8' onClick={viewAllClick}>
                <p className='text-[20PX] font-semibold hover:bg-[#108aca] py-2 text-center cursor-pointer hover:text-white  px-14'>VIEW ALL PRODUCTS</p>
            </div>
            <img src="./laed.jpg" alt=""  className='w-full mt-5'/>

     
        </>
    )
}

export default OneStop
