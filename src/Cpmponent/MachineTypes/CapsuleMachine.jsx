import React from 'react'

const CapsuleMachine = () => {
    const capsuleMachine = [
        {
            name: "CAPSULE FILLING MACHINE ",
            image:"./ca1.png"
        },
        {
            name: "AUTOMATIC CAPSULE LOADER",
            image:"./ca2.png"
        },
        {
            name: "DOUBLE CONE MIXER ",
            image:"./ca3.png"
        },
        {
            name: "CAPSULE POLISHING MACHINE ",
            image:"./ca4.png"
        },
        {
            name: "DEHUMIDIFIER - STANDARD MODEL ",
            image:"./ca5.png"
        },
     
    ]
  return (
    <>
    <div>
    <p className='text-5xl font-extrabold text-[#108aca] text-center max-lg:text-3xl max-md:text-2xl underline mt-5 '>CAPSULE SECTION</p>
    </div>
    <div className='grid-cols-2 grid gap-10 max-lg:grid-cols-2 max-md:grid-cols-1  px-10 max-lg:px-4 mt-8 pb-20'>

   
    {capsuleMachine.map((machine) => (
            <div className='bg-white shadow-lg pb-6 rounded-md px-5 hover:scale-105 transition duration-500'>


            <div>
                <img src={ machine.image} alt="" className='mx-auto   bg-contain  h-[300px] max-md:h-[200px]'/>
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

export default CapsuleMachine