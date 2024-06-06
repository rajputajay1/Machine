import React from 'react'

const Pharma = () => {
    const PHARMAMachine = [
        {
            name: "VIBRO SHIFTER ",
            image: "./px1.png"
        },
        {
            name: "PASTE KETTLE",
            image: "./px2.png"
        },
        {
            name: "TRAY DRYER",
            image: "./px3.png"
        },
        {
            name: "COLLOID MILL",
            image: "./coll.jpg"
        },
        {
            name: "MULTI MILL ",
            image: "./px5.png"
        },
        {
            name: "COATING MACHINE",
            image: "./px6.png"
        },
        {
            name: "FLUID BED DRYER",
            image: "./px7.png"
        },
        {
            name: "OCTAGONAL  BLENDERS",
            image: "./px8.png"
        },
    ]
    return (
        <>
            <div className='flex justify-center'>
                <p className='text-5xl font-extrabold text-white inline-block px-10 py-2 justify-center text-center max-lg:text-3xl max-md:text-2xl underline mt-5 bg-blue-500 '>PHARMA SECTION</p>
            </div>
            <div className='grid-cols-2 grid gap-10 max-lg:grid-cols-2 max-md:grid-cols-1  px-10 max-lg:px-4 mt-8 pb-20'>


                {PHARMAMachine.map((machine) => (
                    <div className='bg-white shadow-lg pb-6 rounded-md px-5 hover:scale-105 transition duration-500'>


                        <div>
                            <img src={machine.image} alt="" className='mx-auto bg-contain  h-[300px] max-md:h-[200px]' />
                        </div>
                        <div className='bg-[#108aca] rounded-full justify-center flex text-center  mt-5 hover:bg-[#333333] cursor-pointer'>
                            <p className='text-3xl font-extrabold text-white py-2 max-md:py-1 px-3  max-md:px-2 max-lg:text-2xl max-md:text-[20px] max-sm:text-[17px]'>{machine.name}</p>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Pharma