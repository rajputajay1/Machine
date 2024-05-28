


import React from 'react';
import { useNavigate } from 'react-router-dom';
const OurProducts = () => {
    const navigate = useNavigate()

  
    const products = [
        { id: 1, name: 'VIBRO SHIFTER', imageUrl: './px1.png' },
        { id: 2, name: 'PASTE KETTLE', imageUrl: './px2.png' },
        { id: 3, name: 'TRAY DRYER', imageUrl: './px3.png' },
        { id: 4, name: 'REACTION VESSELS', imageUrl: './a4.jpg' },
        { id: 5, name: 'HEAT EXCHANGERS', imageUrl: './c2.png' },
        { id: 6, name: 'RECEIVER TANKS', imageUrl: './tans1.png' },
        { id: 7, name: 'ROP CAP SEALING', imageUrl: './li2.png' },
        { id: 8, name: 'Filling Lines', imageUrl: './m6.jpg' },
    ];
    const viveAllProduct = () => {
        navigate("/pharma-machine")
        window.scrollTo(0, 0);

    }

    return (
        <>
            <p className='text-[#333333] text-2xl font-semibold text-center  mt-16' >Our Products</p>
            <div className='grid grid-cols-4 gap-5 max-md:px-5 px-10 pt-10 max-lg:grid-cols-2 max-lg:px-4 max-md:grid-cols-1 max-md:gap-7'>
                {products.map((product) => (
                    <div key={product.id} className='border'>
                        <img src={product.imageUrl} alt={product.name} className='px-5 max-lg:px-2 object-center mx-auto  h-[200px]' />
                        <div className='bg-[#108aca] mt-5 py-2 max-lg:py-1 text-center cursor-pointer hover:text-white hover:bg-[#333333]'>
                            <p className='text-2xl font-semibold max-lg:text-[18px]  text-white'>{product.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center pt-10' onClick={viveAllProduct}>
                <p className='text-2xl font-semibold bg-[#108aca] py-2 text-center cursor-pointer text-white hover:bg-[#333333] px-14  '>View All Products</p>
            </div>
         
        </>
    );
};

export default OurProducts;
