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
                <div className='bg-yellow-400 h-[2px] mt-4 max-lg:mt-3 w-40 mx-auto max-lg:w-40 '></div>
            </div>
            <div className='flex lg:px-20 gap-10 pt-10 max-lg:px-5 max-lg:flex-col'>


                <div className='text-[18px] font-semibold lg:pr-20 '>
                    <p>Adinath International is engaged into Pharmaceutical turnkey project export to the international market. Adinath International offers complete solution for setting up pharmaceutical formulation projects including layout designs, detailed engineering, capacity calculation based on client input, engineering specifications, HVAC System design, on-time supply of equipment, installation, commissioning, etc. The company is based in Ahmedabad, India and has a pool of dedicated professionals from the field.</p>
                    <p className='py-4'>
                        We work closely with our client and offer personalized and cost effective solutions. The strength of the company lies in meeting its commitments to its client. It is a matter of great satisfaction to us that our clients continue to have business relationship with us on a continuous basis.
                    </p>
                    <p>  Apart from Pharmaceutical, Biotech & Veterinary Adinath International also works for Cosmetic, Food, Chemical & Distillery plants.</p>

                </div>



                <img src="	./m10.jpg" alt="About Us Image" height={400} width={500} className='rounded-md' />

            </div>
            <div className='text-[18px] font-semibold  lg:px-20 pt-10 max-lg:px-5' >
                <p>
                    Our Vision is to deliver well engineered, high quality equipments equivalent to international standards & meeting the client’s requirement at reasonable prices. Robust design, quality procedures & careful inspection make our product accurate and precise. Constructed from the ground up with finest material, our products are up to the mark to the demanding requirement of GMP and cGMP standards.
                </p>
                <p className=''>
                    We take pride in supplying most economical, sturdy and easily maintainable machines to suit the requirements of our customer’s individual specific requirements. Their suggestions, guidance and feedback immensely helped us in designing tailor made machines for their special needs.
                </p>
            </div>
            <div className='text-center pt-10 '>
                <p className='text-4xl  text-center max-lg:text-2xl font-extrabold '>
                    Our Team

                </p>
                <div className='bg-yellow-400 h-1 mt-2 max-lg:mt-3 w-36 mx-auto max-lg:w-32 '></div>
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
                                    At Adinath our people considered as biggest assets. Founded by team of experienced professionals from the field, we are an award winning team that transforms ideas into great experiences. We have segment of people dedicated specially for research & development cause which put us apart in the industry. Innovation is key to development and people at Adinath believe in this philosophy.
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
                                    Enterprise grows with great entrepreneur skills. Leaders don’t create followers, they create more leaders. Enduring passion for work and high ethical standards defines our leadership team. Adinath group’s vision is to be pioneer in engineering field with cost effective solution to the industry. Our vision is to make complex technologies viable and accessible on affordable cost.
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