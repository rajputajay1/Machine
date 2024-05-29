import React from 'react'
import OneStop from './OneStop'
import Trusted from '../Trusted/Trusted'
import Form from './Form'
import Mixture from '../Mixture/Mixture'
const AboutUs = () => {
    return (
        <>
<Mixture></Mixture>
            <div className='text-center pt-8 '>
                <p className='text-4xl  text-center max-lg:text-2xl font-extrabold '>
                    About Us

                </p>
                <div className='bg-[#108aca] h-[2px] mt-4 max-lg:mt-3 w-40 mx-auto max-lg:w-40 '></div>
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
                                <p className='text-md px-5 py-3'>
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
                                <p className='text-md px-5 py-3'>
                                Our mission is to empower businesses with state-of-the-art machinery that enhances productivity and ensures operational efficiency. We are dedicated to providing innovative solutions that meet the unique needs of our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                  
                  

                </div>

                <img src="	./about1.jpg" alt="About Us Image"   className='rounded-md lg:h-[350px] max-lg:w-full max-lg:h-[250px] ' />

            </div>
            <div className="relative flex justify-center items-center dark:bg-gray-800 w-full z-10   pt-10  lg:px-20  max-lg:px-5">
                    <div className="relative cursor-pointer dark:text-white">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                        <div className="relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                            <div className="flex items-center flex-col">
                                <p className='text-3xl font-semibold pt-3'>Our Vision</p>
                                <p className='text-md px-5 py-3'>
                                We aim to be the global leader in industrial machinery, known for our commitment to quality, customer satisfaction, and technological innovation. We strive to build long-term relationships with our clients by consistently delivering superior products and services.
                                <br />
                                We aim to be the global leader in industrial machinery, known for our commitment to quality, customer satisfaction, and technological innovation. We strive to build long-term relationships with our clients by consistently delivering superior products and services.
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
                                <p className='text-md px-5 py-3'>
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
                                <p className='text-md px-5 py-3'>
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