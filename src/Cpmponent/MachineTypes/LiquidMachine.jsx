import React from 'react'

const LiquidMachine = () => {
    const LiquidMachine = [
        {
            name: "TWO HEAD VOLUMETRIC LIQUID FILLING",
            image:"./m6.jpg"
        },
        {
            name: "ROP CAP SEALING",
            image:"./m6.jpg"
        },
        {
            name: "INDUSTRIAL MOTORISED STIRRER",
            image:"./m6.jpg"
        },
        {
            name: "EMULSIFIER/HOMOGENISER WITH LIFTING SYSTEM ",
            image:"./m6.jpg"
        },
        {
            name: "ELECTRIC JACKETTED HEATING TANK ",
            image:"./m6.jpg"
        },
        {
            name: "FILTER PRESS MACHINE - GMP MODEL",
            image:"./m6.jpg"
        },
        {
            name: "HEATING TANK WITH STIRRER ",
            image:"./m6.jpg"
        },
        {
            name: "STORAGE / MIXING TANK",
            image:"./m6.jpg"
        },
    ]
  return (
    <>
            <div>
                <p className='text-5xl font-extrabold text-yellow-400 text-center max-lg:text-3xl max-md:text-2xl underline mt-5 '>LIQUID SECTION</p>
            </div>
            <div className='grid-cols-2 grid gap-10 max-lg:grid-cols-2 max-md:grid-cols-1  px-10 max-lg:px-4 mt-8 pb-20'>

           
            {LiquidMachine.map((machine) => (
                    <div className='bg-white shadow-lg pb-6 rounded-md px-5 hover:scale-105 transition duration-500'>


                    <div>
                        <img src={ machine.image} alt="" className='mx-auto'/>
                    </div>
                    <div className='bg-violet-600 rounded-full justify-center flex text-center hover:bg-[#333333] cursor-pointer'>
                        <p className='text-3xl font-extrabold text-white py-2 max-md:py-1 px-3  max-md:px-2 max-lg:text-2xl max-md:text-[20px] max-sm:text-[17px]'>{machine.name}</p>
                    </div>
                </div>
            ))}
                 </div>

           
        </>
  )
}

export default LiquidMachine