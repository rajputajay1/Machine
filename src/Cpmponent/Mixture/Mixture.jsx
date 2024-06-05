import React from 'react'

const Mixture = () => {
    return (
        <>
           
            <img src="./about.jpg" alt="" className='w-full' />

            <div className='relative mb-10'>
                <div className='bg-[#108aca]'>
                    <p className='text-3xl max-lg:text-[18px] py-9 text-center items-center text-white'>
                    North India's Leading Machinery Manufacturer with 12000+ Installations across the globe                    </p>
                </div>
                <div className='text-center border-t-2 border-l-2 border-r-2 border-white flex justify-center mx-auto relative cursor-pointer'>
                <a href="tel:+91 9888885581" target="_blank" rel="noopener noreferrer">


                    <p className=' hover:text-black hover:bg-white hover:border-2 hover:border-black max-lg:text-[15px]  text-[20px] border-t-2 border-l-2 border-r-2 border-white  font-semibold text-white  bg-[#333333] px-5  py-1 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:px-1'>
                        GET A FREE QUOTE
                    </p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Mixture