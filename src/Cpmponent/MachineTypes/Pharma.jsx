import React from 'react'

const Pharma = () => {
    const PHARMAMachine = [
        {
            name: "VIBRO SHIFTER ",
            image:"./m6.jpg"
        },
        {
            name: "PASTE KETTLE",
            image:"./m6.jpg"
        },
        {
            name: "TRAY DRYER",
            image:"./m6.jpg"
        },
        {
            name: "COLLOID MILL",
            image:"./m6.jpg"
        },
        {
            name: "MULTI MILL ",
            image:"./m6.jpg"
        },
        {
            name: "COATING MACHINE",
            image:"./m6.jpg"
        },
        {
            name: "FLUID BED DRYER",
            image:"./m6.jpg"
        },
        {
            name: "BLENDERS",
            image:"./m6.jpg"
        },
    ]
  return (
    <>
    <div>
        <p className='text-5xl font-extrabold text-yellow-400 text-center max-lg:text-3xl max-md:text-2xl underline mt-5 '>PHARMA SECTION</p>
    </div>
    <div className='grid-cols-2 grid gap-10 max-lg:grid-cols-2 max-md:grid-cols-1  px-10 max-lg:px-4 mt-8 pb-20'>

   
    {PHARMAMachine.map((machine) => (
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

export default Pharma