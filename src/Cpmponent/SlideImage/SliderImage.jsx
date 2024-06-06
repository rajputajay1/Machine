import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Mixture from '../Mixture/Mixture';

const SliderImage = () => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            image: './slide1.jpg',
            title: 'Innovative Manufacturer',
            subtitle: 'Machinery for Pharmaceutical, Cosmetic, Chemical & Food Industry',
        },
        {
            image: './slide6.jpg',
            title: 'Complete Filling Lines',
            subtitle: 'Mixing, filling, Capping,Labeling & Allied Equipment',
        },
        {
            image: './slide8.jpg',
            title: 'Production Plants',
            subtitle: 'Integrated Process Plants for Industrial Applications',
        },
        {
            image: './slide7.jpg',
            title: '10,000+ Machine Installation',
            subtitle: 'Customer Base in 15+ Countries & 50+ Happy Customers',
        },
    ];

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setIsAnimating(false);
        }, 1000);
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
            setIsAnimating(false);
        }, 1000);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <motion.div className="h-screen bg-cover w-full flex items-center justify-center flex-col gap-5 pt-8" style={{ backgroundImage: `url(${slides[index].image})` }}
            //    initial={{ x: -1500,}} 
            //    animate={{ x: 0 }}      
            //    transition={{
            //      duration: 0.8,

            //    }}
            >
                <div className='px-3'>


                    <motion.div className={`bg-[#1E3A8A] lg:px-10 max-lg:px-3 items-center justify-center lg:py-2 rounded-md   cursor-pointer   `}
                        initial={{ x: -1000 }}
                        animate={{ x: [1000, 0] }}
                        transition={{
                            duration: 3,

                        }}
                        whileHover={{ scale: 0.9, opacity: 1 }}
                    >
                        <h1 className="text-3xl font-bold pb-1 text-white  max-lg:text-[18px]">{slides[index].title}</h1>
                    </motion.div>
                </div>
                <div className='px-3'
                >
                    <motion.div className={`bg-[#EF4444] px-10  max-lg:px-3 items-center justify-center  lg:py-2 rounded-md  cursor-pointer  `}
                        initial={{ x: -1500, }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 3,

                        }}
                        whileHover={{ scale: 0.9, opacity: 1 }}
                    >
                        <h1 className="text-3xl font-bold text-white pb-1   max-lg:text-[18px]">{slides[index].subtitle}</h1>
                    </motion.div>
                </div>

            </motion.div>

            <Mixture></Mixture>





        </>
    );
}

export default SliderImage;
