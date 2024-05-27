// import React from 'react';

// const OurProducts = () => {
//     // Dummy list of products
//     const products = [
//         { id: 1, name: 'Filling Machines', imageUrl: './m6.jpg' },
//         { id: 2, name: 'Caping Machines', imageUrl: './m6.jpg' },
//         { id: 3, name: 'Labeling Machines', imageUrl: './m6.jpg' },
//         { id: 4, name: 'Mixer Blenders ', imageUrl: './m6.jpg' },
//         { id: 5, name: 'Capsule Section', imageUrl: './m6.jpg' },
//         { id: 6, name: 'Tablet Section', imageUrl: './m6.jpg' },
//         { id: 7, name: 'Production Plants ', imageUrl: './m6.jpg' },
//         { id: 8, name: 'Filling Lines', imageUrl: './m6.jpg' },
//     ];

//     return (
//         <>

//             <p className='text-[#333333] text-2xl font-semibold text-center underline  'style={{ textDecorationColor: '#FBBF24' }}>Our Products</p>
//             <div className='grid  grid-cols-4  gap-5 max-md:px-5   px-10 pt-10 max-lg:grid-cols-2 max-lg:px-4 max-md:grid-cols-1 max-md:gap-7'>


//                 {products.map((product) => (
//                     <div key={product.id} className='border'>
//                         <img src={product.imageUrl} alt={product.name} className='px-5 max-lg:px-2 object-center mx-auto' />
//                         <div className='bg-yellow-400 py-2 max-lg:py-1  text-center cursor-pointer hover:text-white hover:bg-[#333333]'>
//                             <p className='text-2xl font-semibold max-lg:text-[18px]'>{product.name}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className='flex justify-center pt-10 '>
//                 <p className='text-2xl font-semibold bg-yellow-400 py-2 text-center cursor-pointer hover:text-white hover:bg-[#333333]  px-14 '>View All Products</p>
//             </div>
//         </>
//     );
// };

// export default OurProducts;


import React from 'react';

const OurProducts = () => {
    // Dummy list of products
    const products = [
        { id: 1, name: 'Filling Machines', imageUrl: './a3.jpg' },
        { id: 2, name: 'Capping Machines', imageUrl: './m6.jpg' },
        { id: 3, name: 'Labeling Machines', imageUrl: './m6.jpg' },
        { id: 4, name: 'Mixer Blenders', imageUrl: './m6.jpg' },
        { id: 5, name: 'Capsule Section', imageUrl: './m6.jpg' },
        { id: 6, name: 'Tablet Section', imageUrl: './m6.jpg' },
        { id: 7, name: 'Production Plants', imageUrl: './m6.jpg' },
        { id: 8, name: 'Filling Lines', imageUrl: './m6.jpg' },
    ];

    return (
        <>
            <p className='text-[#333333] text-2xl font-semibold text-center underline mt-16' style={{ textDecorationColor: '#FBBF24' }}>Our Products</p>
            <div className='grid grid-cols-4 gap-5 max-md:px-5 px-10 pt-10 max-lg:grid-cols-2 max-lg:px-4 max-md:grid-cols-1 max-md:gap-7'>
                {products.map((product) => (
                    <div key={product.id} className='border'>
                        <img src={product.imageUrl} alt={product.name} className='px-5 max-lg:px-2 object-center mx-auto' />
                        <div className='bg-yellow-400 py-2 max-lg:py-1 text-center cursor-pointer hover:text-white hover:bg-[#333333]'>
                            <p className='text-2xl font-semibold max-lg:text-[18px]'>{product.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center pt-10'>
                <p className='text-2xl font-semibold bg-yellow-400 py-2 text-center cursor-pointer hover:text-white hover:bg-[#333333] px-14'>View All Products</p>
            </div>
         
        </>
    );
};

export default OurProducts;
