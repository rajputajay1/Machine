import React from 'react'
import Icons from '../Header/Icons'
import { FaGlobe, FaHome, FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
    return (
        <>


            <footer className=''style={{ background: 'linear-gradient(to right, #1E3A8A, #EF4444, 	#7F00FF, #F59E0B)' }}>
                <div className='grid grid-cols-3  max-lg:grid-cols-1 gap-10 pt-7 px-5'>


                    <div className='  flex  items-center flex-col'>
                        <img src="./logo.png " alt="" className='w-28 hover:scale-125 transition duration-500' />
                        <p className='text-white font-bold text-3xl pt-2 max-lg:text-[18px]'>Universe Mach Works</p>

                    </div>

                    <div className=' flex  items-center flex-col'>
                        <div className='h-24 w-24  bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#108aca] max-md:h-24 max-md:w-24 hover:scale-125 transition duration-500' >
                            <FaPhone className='text-white size-10 max-md:size-12 ' />

                        </div>
                        <p className='text-white font-bold text-3xl pt-6 max-lg:text-[18px]'>+91-9888885581</p>
                    </div>
                    <div className=' flex  items-center flex-col justify-center'>
                        <div className='h-24 w-24  bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#108aca] max-md:h-24 max-md:w-24 hover:scale-125 transition duration-500' >
                            <FaEnvelope className='text-white size-10 max-md:size-12 ' />

                        </div>
                        
                        <p className='text-white font-bold text-3xl pt-5 max-lg:text-[18px] text-center px-5'>universemachworks@gmail.com
                        </p>
                    </div>
                </div>
                <div className='  text-center  mt-10 px-10  lg:w-[40%]  flex justify-center flex-col items-center m-auto'>
                           
                           <p className='text-3xl font-bold text-white'>Address</p>
                       <p className='text-white font-bold text-[18px] pt-2  max-lg:text-[14px]' >Plot Number 303 A, Barwala Road, Hansa Industrial Park , Derabassi , S.A.S. Nagar , Distt. Mohali (Punjab)-140507</p>
                   </div>

                <div className="flex flex-col  text-3xl font-bold px-20 mt-10 max-lg:px-10  max-md:px-5">
                    <span className="text-white max-lg:text-center max-lg:text-[18px] ">Group Websites</span>
                    <div className='bg-[#108aca] h-1 mt-5 max-lg:mt-3 w-52  max-lg:w-40 max-lg:m-auto '></div>

                </div>
                <div className="px-20 text-white text-[18px] font-semibold pt-5 max-lg:px-10  max-md:px-5 max-lg:text-[14px] ">
                  
                    Granulation | Pharma machines | Capsule section | Liquid section | Chemical section | Ointment section
                </div>

             
                <div className='  flex h-16 item-center px-20 lg:justify-center mt-10 max-lg:px-10  max-md:px-5  ' style={{ background: 'linear-gradient(to right, #1E3A8A, #EF4444, 	#7F00FF, #F59E0B)' }}>
                <hr  className='' />
                    <p className='text-white text-[18px]   max-md:text-[14px] flex  items-center '>
                        Universe Mach Works | ALL RIGHTS RESERVED | POWERED BY Marketing Mingles
                    </p>

                </div>

            </footer>
        </>
    )
}

export default Footer