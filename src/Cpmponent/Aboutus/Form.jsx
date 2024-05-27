import React from 'react'

const Form = () => {
    return (
        <>
            <div  classNameName='mt-10'>

                <div className="bg-white border-4 rounded-lg shadow relative  mt-20 ">

                    <div className="flex items-center justify-center py-2  rounded text-center bg-yellow-400 ">
                        <h3 className="text-3xl text-white-400 font-bold text-center max-md:text-2xl">
                            Get A Quate Today
                        </h3>

                    </div>

                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">FIRSY NAME *</label>
                                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="category" className="text-sm font-medium text-gray-900 block mb-2">LAST NAME *</label>
                                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">EMAIL *</label>
                                    <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">PHONE NO *</label>
                                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="col-span-full">
                                    <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">HOW CAN WE HELP?</label>
                                    <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" ></textarea>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b">
                        <button className="text-white bg-yellow-400 hover:bg-[#333333] focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">GET A FREE QUOTE</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Form