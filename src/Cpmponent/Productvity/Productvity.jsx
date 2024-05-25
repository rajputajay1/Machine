import React from 'react'


const Productvity = () => {
    return (
        <>
       
                <div className='bg-gray-800 mt-12 h-[500px] bg-cover'  style={{ backgroundImage: `url(./m11.jpg)` }}  >
                   
                    <div className=' lg:gap-20 lg:px-20 max-lg:px-5  flex max-lg:flex-col '>
                        

                    <div>
                        <p className='text-4xl font-bold max-lg:text-2xl text-white pt-10'>We Produce for Productivity</p>
                        <div className='bg-yellow-400 h-1 mt-8 max-lg:mt-3 w-52  max-lg:w-40'></div>
                        <p className='text-2xl font-bold text-white max-lg:text-[18px] mt-10 pb-10'>Our vision is to fabricate high end production plants at reasonable prices complies as per international regulatory requirements.</p>

                    </div>
                    <div className='flex  flex-col lg:justify-center md:items-center'>
                        <div className=' '>
                            <p className='text-2xl font-semibold bg-yellow-400 py-2 text-center text-nowrap cursor-pointer hover:text-white hover:bg-[#333333]  px-14 '>View All Products</p>
                        </div>
                        <p className='font-normal text-white pt-2 max-lg:pb-5 '>Only takes a few seconds!</p>
                    </div>
                </div>
                </div>
            
        </>
    )
}

export default Productvity