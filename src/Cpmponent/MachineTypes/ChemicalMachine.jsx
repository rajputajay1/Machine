import React from 'react'

const ChemicalMachine = () => {
    const chemicalMachine = [
        {
            name: "REACTION VESSELS",
            image:"./a4.jpg"
        },
        {
            name: "HEAT EXCHANGERS",
            image:"./c2.png"
        },
        {
            name: "RECEIVER TANKS",
            image:"./tans1.png"
        },
        {
            name: "FERMENTORS",
            image:"./c1.png"
        },
        {
            name: "RIBBON BLENDER ",
            image:"./c5.png"
        },
        {
            name: "TRAY DRYER",
            image:"./c6.png"
        },
        {
            name: "FLUID BED DRYER",
            image:"./c7.png"
        },
        {
            name: "PRESSURE NAUTCH FILTER",
            image:"./c8.png"
        },
    ]
    return (
        <>
            <div>
                <p className='text-5xl font-extrabold text-yellow-400 text-center max-lg:text-3xl max-md:text-2xl underline  mt-5'>CHEMICAL SECTION</p>
            </div>
            <div className='grid-cols-2 grid gap-10 max-md:grid-cols-1    px-10 max-lg:px-4 mt-8 pb-20'>

           
            {chemicalMachine.map((machine) => (
                    <div className='bg-white shadow-lg pb-6 rounded-md px-5 hover:scale-105 transition duration-500'>


                    <div>
                        <img src={ machine.image} alt="" className='mx-auto    bg-contain  h-[300px] '/>
                    </div>
                    <div className='bg-violet-600 rounded-full justify-center  mt-5 flex text-center hover:bg-[#333333] cursor-pointer'>
                        <p className='text-3xl font-extrabold text-white py-2 max-md:py-1  max-md:px-2 max-lg:text-2xl max-md:text-[20px] max-sm:text-[17px]'>{machine.name}</p>
                    </div>
                </div>
            ))}
                 </div>

           
        </>
    )
}

export default ChemicalMachine