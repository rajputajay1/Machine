import React, { useState, useEffect } from 'react';
import { IoIosSettings } from "react-icons/io";

const Machinery = () => {
    const texts = [
        "Cosmetic Industry",
        "Chemical Industry",
        "Nutraceutical Industry",
        "Pharmaceutical Industry"
    ];

    const [index, setIndex] = useState(0);
    const [text, setText] = useState(texts[index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setText(texts[index]);
    }, [index]);


    const machineryItems = [
        {
            title: "Pharmaceutical Machinery",
            description: "Offers machines for injectable production, capsule filling, tablet making & syrup productions.",
            image: "./pharma.jpg"
        },
        {
            title: "Cosmetic Machinery",
            description: "Offer machines for cream manufacturing, filling and capping, tube filling, labeling & cartooning.",
            image: "./cosmetic.jpg"
        },
        {
            title: "Chemical Machinery",
            description: "Offers reactors, vessels, powder mixers, dough mixers, storage tanks, blending vessel & mixing tanks.",
            image: "./chemicalmachine.jpg"
        },
        {
            title: "Nutraceutical Machinery",
            description: "Offers blending, capsule filling, tablet making, counting, bottle filling capping & labeling machines.",
            image: "./neu.jpg"
        }
    ];
    return (
        <>
            <div className='text-center pt-10'>
                <p className='text-3xl font-bold text-center max-lg:text-[22px] '>
                    Machinery for {text}

                </p>
                <div className='bg-[#108aca] h-1 mt-5 max-lg:mt-3 w-52 mx-auto max-lg:w-40 '></div>
            </div>
            <div>
                <p className='text-[18px] px-20 py-10 max-lg:text-[18px] max-lg:px-5'>
                    Universe Mach Works is one of the leading  manufacturer offers turnkey engineering solution to the globally. Universe Mach Works offers cost effective solutions adhering to the latest industrial & regulatory requirements. Universe Mach Works provides engineering services to the Pharmaceutical, Biotech, Cosmetic and Fine Chemicals Industry. Apart from pharmaceutical machinery we also focus on food machinery, chemical machinery, cosmetic machine and customized industrial machinery. 
                </p>
            </div>

            <div className='grid grid-cols-4 gap-10 px-10 max-lg:px-5 max-lg:grid-cols-2 max-md:grid-cols-1 hover:max-lg:gap-20' >
                {machineryItems.map((item, idx) => (
                    <div key={idx} className="transform rounded-lg bg-[#108aca] transition duration-300 hover:rotate-180">
                        <div className="flex flex-col justify-center items-center py-10">
                            <div className="h-14 w-14 rounded-full bg-gray-400 flex items-center justify-center">
                                <IoIosSettings className="text-white size-7" />
                            </div>
                            <div className="text-center pt-6">
                                <p className="text-2xl font-bold  text-white">{item.title}</p>
                                <p className="text-[18px] font-normal  pt-3 px-3  text-white">{item.description}</p>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        
                        <div className="absolute inset-0 transform rotate-180 opacity-0 transition duration-300 hover:opacity-100">
                            <img src={item.image} alt="Alternate side" className="object-cover w-full h-full rounded-lg" />
                            <div className="text-center pt-2 ">
                                <p className="text-2xl font-semibold">{item.title}</p>
                                {/* <p className="text-[18px] font-semibold text-gray-600 pt-3">{item.description}</p> */}
                                <div className='py-1 cursor-pointer'>
                                    <p className='text-[18px] font-semibold py-1 inline-block px-5 hover:bg-[#333333] hover:text-white'>KNOW MORE</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Machinery;
