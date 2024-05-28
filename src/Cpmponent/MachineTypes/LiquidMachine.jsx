import React from 'react'

const LiquidMachine = () => {
    const LiquidMachine = [
        {
            name: "TWO HEAD VOLUMETRIC LIQUID FILLING",
            image:"./li1.png"
        },
        {
            name: "ROP CAP SEALING",
            image:"./li11.png"
        },
        {
            name: "INDUSTRIAL MOTORISED STIRRER",
            image:"./li10.png"
        },
        {
            name: "EMULSIFIER/HOMOGENISER WITH LIFTING SYSTEM ",
            image:"./li4.png"
        },
        {
            name: "ELECTRIC JACKETTED HEATING TANK ",
            image:"./li5.png"
        },
        {
            name: "FILTER PRESS MACHINE - GMP MODEL",
            image:"./li6.png"
        },
        {
            name: "HEATING TANK WITH STIRRER ",
            image:"./li7.png"
        },
        {
            name: "STORAGE / MIXING TANK",
            image:"./li8.png"
        },
    ]
  return (
    <>
            <div>
                <p className='text-5xl font-extrabold text-[#108aca] text-center max-lg:text-3xl max-md:text-2xl underline mt-5 '>LIQUID SECTION</p>
            </div>
            <div className='grid-cols-2 grid gap-10 max-lg:grid-cols-2 max-md:grid-cols-1  px-10 max-lg:px-4 mt-8 pb-20'>

           
            {LiquidMachine.map((machine) => (
                    <div className='bg-white shadow-lg pb-6 rounded-md px-5 hover:scale-105 transition duration-500'>


                    <div>
                        <img src={ machine.image} alt="" className='mx-auto  bg-contain  h-[300px]  max-md:h-[200px]'/>
                    </div>
                    <div className='bg-[#108aca]  rounded-full justify-center flex text-center mt-5 hover:bg-[#333333] cursor-pointer'>
                        <p className='text-3xl font-extrabold text-white py-2 max-md:py-1 px-3  max-md:px-2 max-lg:text-2xl max-md:text-[20px] max-sm:text-[17px]'>{machine.name}</p>
                    </div>
                </div>
            ))}
                 </div>

           
        </>
  )
}

export default LiquidMachine