import React from 'react'
import {motion} from "framer-motion"


const Productvity = () => {
    return (
        <>
            <motion.div className='mt-14'
                 initial={{ x: -1500,}} 
                 animate={{ x: 0 }}      
                 transition={{
                   duration: 2,
                 
                 }}
                  whileHover={{scale:0.9, opacity:1}}
            >

                <img src="./prod.jpg" alt="" className='w-full' />
            </motion.div>

        

        </>
    )
}

export default Productvity