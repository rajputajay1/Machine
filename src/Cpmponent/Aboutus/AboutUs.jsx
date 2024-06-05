import React from 'react'
import OneStop from './OneStop'
import Trusted from '../Trusted/Trusted'
import Form from './Form'
import Mixture from '../Mixture/Mixture'
import {motion} from "framer-motion"

const AboutUs = () => {
    return (
        <>
            <div>


                <motion.img src="./about.jpg" alt="" className='w-full'
                    initial={{ x: -1500, }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 2,

                    }}
                    whileHover={{ scale: 0.9, opacity: 1 }}
                />
                <Mixture></Mixture>
            </div>
            <div className='text-center pt-8 '>
                <p className='text-4xl  text-center max-lg:text-2xl font-extrabold '>
                    About Us

                </p>
                <div className='bg-[#108aca] h-[2px] mt-2 max-lg:mt-3 w-40 mx-auto max-lg:w-40 '></div>
            </div>
            <div>

            </div>
            <div className='flex lg:px-20 gap-10 pt-10 max-lg:px-5 max-lg:flex-col'>

                <div className='text-[18px] font-semibold lg:pr-32 '>
                    <div className="relative flex justify-center items-center dark:bg-gray-800 w-full z-10  ">
                        <div className="relative cursor-pointer dark:text-white">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                            <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                                <div className="flex items-center flex-col">
                                    <p className='text-[18px] px-5 py-3'>
                                        At Universe Mach Works, we pride ourselves on being the premier provider of top-tier machinery for the pharmaceutical, food, cosmetics, and chemical industries. Founded on the principles of quality, reliability, and customer satisfaction, we have grown to become the leading stockists in North India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <p>At Universe Mach Works, we pride ourselves on being the premier provider of top-tier machinery for the pharmaceutical, food, cosmetics, and chemical industries. Founded on the principles of quality, reliability, and customer satisfaction, we have grown to become the leading stockists in North India.</p> */}

                    <div className="relative flex justify-center items-center dark:bg-gray-800 w-full z-10  pt-10">
                        <div className="relative cursor-pointer dark:text-white">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                            <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                                <div className="flex items-center flex-col">
                                    <p className='text-3xl font-semibold pt-3'>Our Mission</p>
                                    <p className='text-[18px] px-5 py-3'>
                                        Our mission is to empower businesses with state-of-the-art machinery that enhances productivity and ensures operational efficiency. We are dedicated to providing innovative solutions that meet the unique needs of our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <img src="	./about1.jpg" alt="About Us Image" className='rounded-md lg:h-[350px] max-lg:w-full max-lg:h-[250px] hover:scale-110 transition duration-500' />

            </div>
            <div className="relative flex justify-center items-center dark:bg-gray-800 w-full z-10   pt-10  lg:px-20  max-lg:px-5">
                <div className="relative cursor-pointer dark:text-white">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                    <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                        <div className="flex items-center flex-col">
                            <p className='text-3xl font-semibold pt-3'>Our Vision</p>
                            <p className='text-[18px] px-5 py-3'>
                                At Universe Mach Works our vision is to become the leading global provider of innovative and reliable machinery solutions for the pharmaceutical, food, chemical, and cosmetic industries. We aim to revolutionize manufacturing processes by delivering state-of-the-art equipment that enhances productivity, ensures safety, and promotes sustainability.
                                <br />
                                <br />
                                We are committed to pushing the boundaries of technology and engineering to develop machines that meet the highest standards of quality and efficiency. Our focus is on fostering long-term partnerships with our clients by understanding their unique needs and delivering customized solutions that drive their success.
                                <br />
                                <br />
                                In the pharmaceutical sector, we envision a future where our advanced machinery supports the production of life-saving medications with precision and compliance. For the food industry, our goal is to provide equipment that ensures hygienic, efficient, and scalable food production. In the chemical industry, we strive to offer robust and safe machinery that meets the demanding requirements of complex chemical processes. For the cosmetic industry, our ambition is to deliver innovative machinery that enhances product quality and consistency.
                                <br />
                                <br />
                                Sustainability is at the core of our vision. We are dedicated to reducing the environmental impact of our machines by incorporating energy-efficient technologies and promoting eco-friendly practices. Our ultimate goal is to lead the industry with cutting-edge solutions that contribute to a healthier, safer, and more sustainable world.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center pt-10 '>
                <p className='text-4xl  text-center max-lg:text-2xl font-extrabold '>
                    Our Team

                </p>
                <div className='bg-[#108aca] h-1 mt-2 max-lg:mt-3 w-36 mx-auto max-lg:w-32 '></div>
            </div>

            <div className='pt-10 grid grid-cols-2 gap-10 lg:px-20 relative overflow-hidden max-lg:px-5 max-md:grid-cols-1'>
                {/* Curved Background */}
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('./m2.jpg')", clipPath: "ellipse(0% 50% at 50% 0%)" }}></div>

                <div className="relative flex justify-center items-center dark:bg-gray-800 w-full z-10">
                    <div className="relative cursor-pointer dark:text-white">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                        <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                            <div className="flex items-center flex-col">
                                <p className='text-3xl font-semibold pt-3'>Our People</p>
                                <p className='text-[18px] px-5 py-5'>
                                    Our team consists of highly skilled professionals with extensive experience in the machinery industry. From engineers to customer service representatives, everyone at Universe Mach Works is dedicated to providing the best possible experience for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center dark:bg-gray-800 w-full z-10">
                    <div className="relative cursor-pointer dark:text-white">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                        <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                            <div className="flex items-center flex-col">
                                <p className='text-3xl font-semibold pt-3'>Leadership Team</p>
                                <p className='text-[17px] px-5 py-2'>
                                    Enterprise grows with great entrepreneur skills. Leaders don’t create followers, they create more leaders. Enduring passion for work and high ethical standards defines our leadership team. Universe Mach Works vision is to be pioneer in engineering field with cost effective solution to the industry. Our vision is to make complex technologies viable and accessible on affordable cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OneStop></OneStop>
            <Trusted></Trusted>
            <Form></Form>

        </>
    )
}

export default AboutUs