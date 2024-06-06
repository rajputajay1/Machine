import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

const Adhinath = () => {
    const navigae = useNavigate()

    const handleBlogs = () => {
        navigae("/blogs")
        window.scrollTo(0, 0);
    }
    return (
        <>
            <p className='text-[#333333] text-3xl font-semibold text-center mt-12 max-lg:px-3'>Universe Mach Works's Blog</p>
            <div className='pt-10 text-[18px] font-bold text-[#333333] text-center lg:w-[46%] lg:mx-auto px-10 max-md:px-5 '>
                <p className='text-center'>Explore pharmaceutical machinery resource here, Every article give insight about pharmaceutical production techniques and trends.</p>

            </div>

            <motion.div className='grid grid-cols-3 mt-8 gap-10 lg:px-20 max-lg:px-10 max-md:px-5 max-md:grid-cols-1 max-lg:grid-cols-2'
            
                
            initial={{ opacity: 0, translateX:  -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}

            transition={{ duration: 1, delay: 0.3 }}
            >


                <div
                    class="shadow-md border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <motion.img src="./adhinath2.jpg" class="w-full mb-3 h-[220px]"
                      


                    />
                    <div class="p-4 pt-2">
                        <div class="mb-8">
                            <motion.p class="text-gray-900 font-bold text-2xl mb-2 inline-block hover:text-yellow-400 max-md:text-[18px] cursor-pointer"
                              whileHover={{ scale: 0.94, opacity: 1 }}
                            >
                                Upscale Your Business with Universe Mach Works International</motion.p>
                            <p class="text-sm text-gray-600 flex items-center">

                                April 22nd, 2024
                            </p>
                            <hr className=' mt-3' />

                            <p class="text-gray-700 text-lg pt-3 max-md:text-[18px]">Professionals from a range of life sciences disciplines make up the think tank Universe Mach Works International, which is dedicated to reimagining a better, fairer, and more equal society. By bringing investors' ideas to life.</p>
                        </div>

                    </div>
                </div>
                <div
                    class="shadow-md border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <img src="./a1.jpg" class="w-full mb-3 h-[220px]" />
                    <div class="p-4 pt-2">
                        <div class="mb-14">
                            <motion.p class="text-gray-900 font-bold text-2xl mb-2 inline-block hover:text-yellow-400 max-md:text-[18px] cursor-pointer"
                               whileHover={{ scale: 0.94, opacity: 1 }}
                            >
                                Beginners Guide for Capsule Filling Machines</motion.p>
                            <p class="text-sm text-gray-600 flex items-center">

                                April 21st, 2023
                            </p>
                            <hr className=' mt-3' />

                            <p class="text-gray-700 text-lg pt-3 max-md:text-[18px]">In the pharmaceutical sector, a wide variety of machinery and equipment are employed. Depending on how they are configured, each of these devices must carry out a variety of tasks and operations. One</p>
                        </div>

                    </div>
                </div>
                <div
                    class="shadow-md border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <img src="./star.jpg" class="w-full h-[220px] mb-3 mx-auto   " />
                    <div class="p-4 pt-2">
                        <div class="mb-8">
                            <motion.p class="text-gray-900 font-bold text-2xl mb-2 inline-block hover:text-yellow-400 max-md:text-[18px]  cursor-pointer"
                               whileHover={{ scale: 0.94, opacity: 1 }}
                            >
                                Comprehensive Guide for Granulation Equipments</motion.p>
                            <p class="text-sm text-gray-600 flex items-center">

                                April 22nd, 2023
                            </p>
                            <hr className=' mt-3' />

                            <p class="text-gray-700 text-lg pt-3 max-md:text-[18px]">What is Granulation? In the pharmaceutical sector, Granulation Equipments of enlarging particles using the agglomeration technique. The granulation process, as its name indicates, aids in the general manufacturing of granules. The granulation process</p>
                        </div>

                    </div>
                </div>


            </motion.div>
            <div className='flex justify-center pt-20 '>
                <p className='text-2xl font-semibold text-white bg-[#108aca] py-2 text-center cursor-pointer  hover:bg-[#333333]  px-14 ' onClick={handleBlogs}>View All Blogs</p>
            </div>

        </>
    )
}

export default Adhinath