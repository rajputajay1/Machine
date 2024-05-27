import React from 'react';

const partners = [
    { id: 1, image: './m8.jpg', name: 'Partner 1' },
    { id: 2, image: './a5.jpg', name: 'Partner 2' },
    { id: 3, image: './a6.jpg', name: 'Partner 3' },
    { id: 4, image: './a7.jpg', name: 'Partner 3' },
    { id: 5, image: './a8.jpg', name: 'Partner 3' },
    { id: 6, image: './a9.jpg', name: 'Partner 3' },
    { id: 7, image: './a10.jpg', name: 'Partner 3' },
    { id: 8, image: './a11.jpg', name: 'Partner 3' },
    { id: 9, image: './a12.jpg', name: 'Partner 3' },
    { id: 10, image: './a13.jpg', name: 'Partner 3' },
    // Add more partners as needed
];

const Trusted = () => {
    return (
        <>
            <p className='text-[#333333] text-2xl font-semibold text-center mt-10'>Trusted Partners</p>
            <div className='pt-10 text-[20px] font-bold text-[#333333] text-center lg:w-[46%] lg:mx-auto px-10 max-md:px-5 '>
                <p className='text-center'>Our customers spread in more than 45 countries across the world. Below are a few of our satisfied clients.</p>
            </div>
            <div className='grid grid-cols-5 gap-5 px-10 max-lg:px-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-2 max-md:px-3 pt-10'>
                {partners.map(partner => (
                    <div key={partner.id} className='flex justify-center items-center dark:bg-gray-800 w-full'>
                        <div className='relative cursor-pointer dark:text-white'>
                            <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200'></span>
                            <div className='relative bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500'>
                                <div className='flex items-center'>
                                    <img src={partner.image} alt={partner.name} className='px-10 max-lg:px-5 max-md:px-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Trusted;
