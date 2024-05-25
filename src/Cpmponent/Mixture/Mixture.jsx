import React from 'react'

const Mixture = () => {
    return (
        <>
            <div style={{ backgroundImage: "url('./m11.jpg')", }} className='lg:h-[500px]  bg-cover max-lg:h-[300px]   flex items-center justify-center flex-col gap-5  '>

                <div className={`bg-[#3a4a55] lg:px-10 max-lg:px-3 items-center justify-center py-2  `}>
                    <h1 className="text-5xl font-bold pb-1 text-white  max-lg:text-2xl text-center">CONCEPT TO <span className='text-yellow-400'>CREATION</span> </h1>

                </div>
                <p className='text-yellow-400 font-normal text-2xl text-center max-md:text-[18px]'>Turnkey Engineering Solutions for Pharmaceuticals & Allied Industries</p>
            </div>

            <div className='relative mb-10'>
                <div className='bg-[#f8d55f]'>
                    <p className='text-3xl max-lg:text-[18px] py-9 text-center items-center'>
                        Pharmaceutical Machinery Manufacturer with 6500+ Installations Across the Globe
                    </p>
                </div>
                <div className='text-center border-t-2 border-l-2 border-r-2 border-white flex justify-center mx-auto relative cursor-pointer'>
                    <p className=' hover:text-black hover:bg-white hover:border-2 hover:border-black max-lg:text-[15px]  text-[20px] border-t-2 border-l-2 border-r-2 border-white  font-semibold text-white  bg-[#333333] px-5  py-1 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:px-1'>
                        GET A FREE QUATE
                    </p>
                </div>
            </div>
        </>
    )
}

export default Mixture