// src/Component/Contect/ContactForm.jsx
import React from 'react';

const ContactForm = () => {

    return (
        <form
            action='https://formspree.io/f/mdknnrje'
            method='POST'
        >
            <div className="grid grid-cols-6 gap-10">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-900 block mb-2">FIRST NAME *</label>
                    <input type="text" name="first-name"
                        autoComplete='off'
                        id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-900 block mb-2">LAST NAME *</label>
                    <input type="text" name="last-name"
                        autoComplete='off'
                        id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">EMAIL ADDRESS *</label>
                    <input type="email" autoComplete='off'
                        name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2">PHONE NUMBER *</label>
                    <input type="tel" name="phone" autoComplete='off'
                        id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                </div>
                <div className="col-span-full">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900 block mb-2">HOW CAN WE HELP?</label>
                    <textarea id="message" autoComplete='off'
                        name="message" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"></textarea>
                </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b text-center">
                <button className="bg-[#108aca] text-nowrap cursor-pointer text-white hover:bg-[#333333] rounded-lg text-sm px-5 py-2.5 font-bold" type="submit" >SUBMIT YOUR QUERY</button>
            </div>
        </form>
    );
}

export default ContactForm;
