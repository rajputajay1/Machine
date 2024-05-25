import React, { useState, useEffect } from 'react';

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
            title: '6500+ Machine Installation',
            subtitle: 'Customer Base in 45+ Countries & 900+ Happy Customers',
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

            <div className="h-[500px] bg-cover bg-center flex items-center justify-center flex-col gap-5 transition-all duration-500 ease-in-out transform mt-9" style={{ backgroundImage: `url(${slides[index].image})` }}>
                <div className={`bg-[#66544a] lg:px-10 max-lg:px-3 items-center justify-center lg:py-2 rounded-md transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className="text-3xl font-normal pb-1 text-white  max-lg:text-[18px]">{slides[index].title}</h1>
                </div>
                <div className={`bg-[#f8d55f] px-10  max-lg:px-3 items-center justify-center lg:py-2 rounded-md transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className="text-3xl font-normal pb-1 text-black  max-lg:text-[18px]">{slides[index].subtitle}</h1>
                </div>

            </div>

            <div className='relative mb-10'>
                <div className='bg-[#f8d55f]'>
                    <p className='text-3xl max-lg:text-[18px] py-9 text-center items-center'>
                        Pharmaceutical Machinery Manufacturer with 6500+ Installations Across the Globe
                    </p>
                </div>
                <div className='text-center border-t-2 border-l-2 border-r-2 border-white flex justify-center mx-auto relative cursor-pointer'>
                    <p className=' hover:text-black hover:bg-white hover:border-2 hover:border-black max-lg:text-[15px]  text-[20px] border-t-2 border-l-2 border-r-2 border-white  font-semibold text-white  bg-[#333333] px-5 py-1 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                        GET A FREE QUATE
                    </p>
                </div>
            </div>



        </>
    );
}

export default SliderImage;
