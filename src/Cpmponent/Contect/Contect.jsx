import React from 'react'
import { FaGlobe, FaHome, FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'

const Contect = () => {
    return (
        <>
            <img src="./contect1.jpg" alt=""  className='w-full'/>
            <div className='relative mb-10'>
                <div className='bg-[#f8d55f]'>
                    <p className='text-3xl max-lg:text-[18px] py-9 text-center items-center'>
                        Pharmaceutical Machinery Manufacturer with 120+ Installations Across the Globe
                    </p>
                </div>
                <div className='text-center border-t-2 border-l-2 border-r-2 border-white flex justify-center mx-auto relative cursor-pointer'>
                    <p className=' hover:text-black hover:bg-white hover:border-2 hover:border-black max-lg:text-[15px]  text-[20px] border-t-2 border-l-2 border-r-2 border-white  font-semibold text-white  bg-[#333333] px-5  py-1 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:px-1'>
                        GET A FREE QUOTE
                    </p>
                </div>
            </div>
            <div className='flex mt-10 max-lg:flex-col'>

         
            <div className='lg:w-[30%] px-5 mt-5'>
                <p className='text-4xl font-extrabold max-lg:text-3xl  max-lg:text-center  pb-3'>Corporate Office</p>
                <div className='bg-yellow-400 h-1 w-10 max-lg:w-28 max-lg:mx-auto'></div>
                <div className='flex gap-5 mt-6 max-lg:text-center  max-lg:flex-col max-lg:justify-center items-center'>
                    <FaHome className='size-20 max-lg:size-8 text-gray-800' />

                    <p className='text-gray-800 font-semibold text-[18px]'>Plot Number 303A,Barwala Road, Hansa Industrial Park , Derabassi , S.A.S. Nagar , Distt. Mohali (Punjab)-140507</p>
                </div>
                <div className='flex gap-5 mt-6 max-lg:text-center  max-lg:flex-col max-lg:justify-center items-center'>
                    <FaPhone className='size-8 text-gray-800' />

                    <p className='text-gray-800 font-semibold text-[18px]'>+91-9888885581</p>
                </div>
                <div className='flex gap-5 mt-6 max-lg:text-center  max-lg:flex-col max-lg:justify-center items-center'>
                    <FaEnvelope className='size-8 text-gray-800' />

                    <p className='text-gray-800 font-semibold text-[18px]'>universemachworks@gmail.com</p>
                </div>
            </div>

            <div class="bg-white border-4 rounded-lg shadow relative m-10 lg:w-[70%]">
                <div className='text-center pt-8'>
                    <p className='text-3xl font-semibold text-center max-lg:text-2xl '>
                        Talk To Us – We’re Here To Help

                    </p>
                    <div className='bg-yellow-400 h-[2px] mt-5 max-lg:mt-3 w-52 mx-auto max-lg:w-40'></div>
                </div>
                <div class="p-6 space-y-6 mt-5">
                    <form action="#">
                        <div class="grid grid-cols-6 gap-10">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">FIRST NAME *</label>
                                <input type="text" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required="" />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Last NAME *</label>
                                <input type="text" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required="" />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">EMAIL ADDRESS *</label>
                                <input type="text" name="brand" id="brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="price" class="text-sm font-medium text-gray-900 block mb-2">

                                    PHONE NUMBER *

                                </label>
                                <input type="number" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                            </div>
                            <div class="col-span-full">
                                <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">HOW CAN WE HELP?</label>
                                <textarea id="product-details" rows="6" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="p-6 border-t border-gray-200 rounded-b">
                    <button class="text-black bg-yellow-400  text-nowrap cursor-pointer hover:text-white hover:bg-[#333333]  rounded-lg text-sm px-5 py-2.5 text-center font-bold" type="submit">GET FREE QUATE</button>
                </div>


                </div>
                </div>
        </>
    )
}

export default Contect