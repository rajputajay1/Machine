import React from 'react'
import Icons from '../Header/Icons'
import { FaGlobe, FaHome, FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
   

            <footer className='bg-[#1e1e1e]'>
                <div className='grid grid-cols-3  max-lg:grid-cols-1 gap-10 pt-7 px-5'>


                    <div className='  flex  items-center flex-col'>
                        <img src="./logo.png " alt="" className='w-24' />
                        <p className='text-white font-bold text-3xl pt-2 max-lg:text-2xl'>Universe Mach Works</p>
                        <div className='  text-center  mt-5 px-10'>
                           
                            <p className='text-2xl font-bold text-white'>Address</p>
                        <p className='text-white font-bold text-[18px] pt-2 ' >Plot Number 303 A, Barwala Road, Hansa Industrial Park , Derabassi , S.A.S. Nagar , Distt. Mohali (Punjab)-140507</p>
                    </div>
                    </div>
              
                    <div className=' flex  items-center flex-col'>
                        <div className='h-24 w-24  bg-[#333333] rounded-full flex items-center justify-center hover:bg-yellow-400 max-md:h-24 max-md:w-24' >
                            <FaPhone className='text-white size-10 max-md:size-12 ' />

                        </div>
                        <p className='text-white font-bold text-3xl pt-2 max-lg:text-2xl'>+91-9888885581</p>
                    </div>
                    <div className=' flex  items-center flex-col'>
                        <div className='h-24 w-24  bg-[#333333] rounded-full flex items-center justify-center hover:bg-yellow-400 max-md:h-24 max-md:w-24' >
                            <FaEnvelope className='text-white size-10 max-md:size-12 ' />

                        </div>
                        <p className='text-white font-bold text-3xl pt-2 max-lg:text-2xl text-wrap px-5'>universemachworks@gmail.com
</p>
                    </div>
                </div>

                <div className="flex flex-col  text-3xl font-bold px-20 mt-10 max-lg:px-10  max-md:px-5">
                    <span className="text-white">Group Websites</span>
                    <div className='bg-yellow-400 h-1 mt-5 max-lg:mt-3 w-52  max-lg:w-40'></div>

                </div>
                <div className="px-20 text-white text-[18px] font-semibold pt-5 max-lg:px-10  max-md:px-5 ">
                    Pharmaceutical Machinery | Ampoule Filling Machine | Vial Filling Machine | Injectable Filling Machine | Capsule Filling Machine | Powder Filling Machines | Pharmaceutical Filling Machines | Pharma Machinery 
                </div>

                <div className='bg-[#111111]  flex h-16 item-center px-20 lg:justify-center mt-10 max-lg:px-10  max-md:px-5  '>
                    <p className='text-white text-[18px]   max-md:text-[14px] flex  items-center '>
                    Universe Mach Works | ALL RIGHTS RESERVED | POWERED BY Marketing Mingles
                    </p>

                </div>

            </footer>
        </>
    )
}

export default Footer