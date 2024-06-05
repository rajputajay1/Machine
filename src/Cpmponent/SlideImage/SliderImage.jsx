import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion"

const SliderImage = () => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            image: './m4.jpg',
            title: 'Innovative Manufacturer',
            subtitle: 'Machinery for Pharmaceutical, Cosmetic, Chemical & Food Industry',
        },
        {
            image: './m2.jpg',
            title: 'Complete Filling Lines',
            subtitle: 'Mixing, filling, Capping,Labeling & Allied Equipment',
        },
        {
            image: './m5.jpg',
            title: 'Production Plants',
            subtitle: 'Integrated Process Plants for Industrial Applications',
        },
        {
            image: './machine1.jpg',
            title: '100+ Machine Installation',
            subtitle: 'Customer Base in 15+ States & 120+ Happy Customers',
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

            <motion.div className="h-screen bg-cover  flex items-center justify-center flex-col gap-5  pt-8" style={{ backgroundImage: `url(${slides[index].image})` }}
            //    initial={{ x: -1500,}} 
            //    animate={{ x: 0 }}      
            //    transition={{
            //      duration: 0.8,
              
            //    }}
            >
                <div className='px-3'>


                    <motion.div className={`bg-[#66544a] lg:px-10 max-lg:px-3 items-center justify-center lg:py-2 rounded-md   cursor-pointer     transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                      initial={{ x: -1000 }}
                      animate={{ x: [1000, 0] }}
                      transition={{
                          duration: 3,
                       
                      }}
                      whileHover={{scale:0.9, opacity:1}}
                    >
                        <h1 className="text-3xl font-normal pb-1 text-white  max-lg:text-[18px]">{slides[index].title}</h1>
                    </motion.div>
                </div>
                <div className='px-3'
                    
                >



                    <motion.div className={`bg-[#f8d55f] px-10  max-lg:px-3 items-center justify-center  lg:py-2 rounded-md transition-opacity cursor-pointer  duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                     initial={{ x: -1500,}} 
                     animate={{ x: 0 }}      
                     transition={{
                       duration: 3,
                    
                     }}
                      whileHover={{scale:0.9, opacity:1}}
                    >
                        <h1 className="text-3xl font-normal pb-1 text-black  max-lg:text-[18px]">{slides[index].subtitle}</h1>
                    </motion.div>
                </div>

            </motion.div>

            <div className='relative mb-10'>
                <div className='bg-[#108aca]'>
                    <motion.p className='text-3xl max-lg:text-[18px] py-9 text-center items-center text-white  cursor-pointer'
                      initial={{ x: -1500,}} 
                      animate={{ x: 0 }}      
                      transition={{
                        duration: 3,
                      
                      }}
                       whileHover={{scale:0.9, opacity:1}}
                    
                    >

                    North India's Leading Machinery Manufacturer with 12000+ Installations across the globe                    </motion.p>
                </div>
                <motion.div className='text-center border-t-2 border-l-2 border-r-2 border-white flex justify-center mx-auto relative cursor-pointer'
                   initial={{ x: -1000 }}
                   animate={{ x: [1000, 0] }}
                   transition={{
                       duration: 3,
                
                   }}
                   whileHover={{scale:0.9, opacity:1}}
                >
                    <a href="tel:+91 9888885581" target="_blank" rel="noopener noreferrer">


                        <p className=' hover:text-black hover:bg-white hover:border-2 hover:border-black max-lg:text-[15px]  text-[20px] border-t-2 border-l-2 border-r-2 border-white  font-semibold text-white  bg-[#333333] px-5 py-1 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                            GET A FREE QUOTE
                        </p>
                    </a>
                </motion.div>
            </div>



        </>
    );
}

export default SliderImage;
