import React, { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        district: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://script.google.com/macros/s/AKfycbydlGg5ujTXG4lOzoCQCHIoy0pQ_q7FyRCQGD3lw5s737IBuU7W_yObdtnm3OiOPsQl/exec', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            // alert('Form submitted successfully');
            toast.success("Email Send Successfully")
            setFormData({
                name: '',
                email: '',
                phone: '',
                state: '',
                district: '',
                message: ''
            });
        } else {
            // alert('Failed to submit the form');
            toast.error("Something Went Wrong")
        }
    };


    return (
        <>
            <div className='flex justify-center items-center w-full'>
                <div className='bg-gray-50 w-full rounded-md py-8 px-5 border border-gray-300'>
                    <div className='w-full'>
                        <div class="">
                            <form onSubmit={handleSubmit} className="">
                                <div class=" ">
                                    <div class="mx-auto">
                                        <div class=" mb-4 flex flex-col gap-y-3">

                                            <div className='flex flex-col md:flex-row items-center gap-x-2'>

                                                <div className='w-full'>
                                                    <label class="font-semibold text-[12px] md:text-[14PX] text-gray-600 pb-1 block" for="name">Name</label>
                                                    <input class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" id="name"
                                                        name="name"
                                                        type="text"

                                                        value={formData.name}
                                                        onChange={handleChange} />
                                                </div>

                                                <div className='w-full'>
                                                    <label class="font-semibold text-[12px] md:text-[14PX] text-gray-600 pb-1 block" for="email">E-mail</label>
                                                    <input class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full peer" id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange} />

                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                <label class="font-semibold text-[12px] md:text-[14PX] text-gray-600 pb-1 block" for="Phone">Phone</label >
                                                <input class="peer border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    pattern="^[0-9]{10}$" //
                                                    value={formData.phone}
                                                    onChange={handleChange} />
                                                <p className="invisible peer-invalid:visible text-red-500 text-sm">
                                                    Please provide a valid phone number.
                                                </p>
                                            </div>

                                            <div className='w-full'>
                                                <label class="font-semibold text-[12px] md:text-[14PX] text-gray-600 pb-1 block" for="state">State</label >
                                                <input class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" id="state"
                                                    name="state"
                                                    type="text"
                                                    value={formData.state}
                                                    onChange={handleChange} />
                                            </div>

                                            <div className='w-full'>
                                                <label class="font-semibold text-[12px] md:text-[14PX] text-gray-600 pb-1 block" for="district">District</label >
                                                <input class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" id="district"
                                                    name="district"
                                                    type="text"
                                                    value={formData.district}
                                                    onChange={handleChange} />
                                            </div>

                                            <div className='w-full'>
                                                <label class="font-semibold text-[12px] md:text-[14PX] text-gray-600 pb-1 block" for="message">Message</label >
                                                <textarea name="message" id="message" rows="3" value={formData.message} onChange={handleChange} className='border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full'></textarea>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    required
                                                    className="mr-2 h-4 w-4 border border-gray-300 rounded accent-blue-500"
                                                />
                                                <label htmlFor="terms" className="text-sm text-gray-700">
                                                    I agree with the <a href="#" className="text-blue-500">General Terms</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
                                                </label>
                                            </div>

                                            <div className='flex justify-center items-center w-full'>
                                                <button className='uppercase font-semibold w-full text-[12px] md:text-[14px] bg-gray-800 hover:bg-gray-700 text-white rounded-md px-5 py-2'>Submit</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Form;