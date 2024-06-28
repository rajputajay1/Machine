import React from 'react'
import { FaGlobe, FaHome, FaPhone, FaMobile, FaEnvelope } from 'react-icons/fa'
import Mixture from '../Mixture/Mixture'
import { motion } from "framer-motion"

import ContactForm from './Contectform'

const Contect = () => {
    return (
        <>
            <motion.div
                initial={{ x: -1500, }}
                animate={{ x: 0 }}
                transition={{
                    duration: 2,

                }}
                whileHover={{ scale: 0.9, opacity: 1 }}
            >

                <img src="./contect1.jpg" alt="" className='w-full' />
            </motion.div>
            <Mixture></Mixture>

            <div className='flex mt-10 max-lg:flex-col'>


                <div className='lg:w-[30%]  px-10 mt-5'>
                    <p className='text-4xl font-extrabold max-lg:text-3xl  max-lg:text-center  pb-3'>Corporate Office</p>
                    <div className='bg-[#108aca] h-1 w-10 max-lg:w-28 max-lg:mx-auto'></div>
                    <div className='flex gap-5 mt-6 max-lg:text-center  max-lg:flex-col max-lg:justify-center items-center'>
                        <FaHome className='size-24 max-lg:size-10 text-gray-800' />

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
                    <div className='mt-5  rounded-md pr-3'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.6423259658613!2d76.85352287607115!3d30.58764089262946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbf001c7b5399%3A0x28fc8aff935c3063!2sHansa%20Industrial%20Park%20Barwala%20Road%20Dera%20Bassi%20Mohali%20Punjab%20India.!5e0!3m2!1sen!2sin!4v1717665385464!5m2!1sen!2sin" width="100%"
                            height="350"
                            style={{ border: 0, borderRadius: 10 }}
                            allowFullScreen=""

                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='my-3 mx-2 rounded-xl  '></iframe>
                    </div>
                </div>

                <div class="bg-white border-4 rounded-lg shadow relative m-10 lg:w-[70%]">
                    <div className='text-center pt-8'>
                        <p className='text-3xl font-semibold text-center max-lg:text-2xl '>
                            Talk To Us – We’re Here To Help

                        </p>
                        <div className='bg-[#108aca] h-[2px] mt-5 max-lg:mt-3 w-52 mx-auto max-lg:w-40'></div>
                    </div>
                    <div class="p-6 space-y-6 mt-5">
                        <ContactForm></ContactForm>
                        {/* <form action="#">
                            <div class="grid grid-cols-6 gap-10">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">FIRST NAME *</label>
                                    <input type="text" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Last NAME *</label>
                                    <input type="text" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
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
                        </form> */}
                    </div>

                    {/* <div class="p-6 border-t border-gray-200 rounded-b">
                        <button class=" bg-[#108aca]  text-nowrap cursor-pointer text-white hover:bg-[#333333]  rounded-lg text-sm px-5 py-2.5 text-center font-bold" type="submit">SUBMIT YOUR QUERY</button>
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default Contect