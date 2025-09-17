import Form from '../components/Form';
import video from '../images/video.mp4'

// icons
import { FaArrowRightLong } from "react-icons/fa6";


const Contact = () => {
    return (
        <>

            <div className='overflow-hidden font-[poppins]'>
                <section className='bg-gray-100'>
                    <div className='py-16 w-[80%] mx-auto'>

                        <div className='border-t border-gray-400 w-full pb-7'></div>

                        <div className='flex items-center justify-center gap-x-10'>
                            <div className='w-[50%] mx-auto'>
                                <div>
                                    <div>
                                        <h3 className='text-[68px] font-semibold ' style={{ lineHeight: '5rem' }}>Start a project with us</h3>
                                    </div>

                                    <p className=' flex items-center gap-x-8 text-[14px] mt-10 mb-36 '> <span>Want to talk instead?</span> <span className='flex items-center gap-x-3 group font-medium underline'>Book a call <FaArrowRightLong className='group-hover:rotate-45 duration-500' /></span> </p>

                                    <div className="relative h-full w-full rounded-md overflow-hidden">
                                        <video className="w-full object-cover " autoPlay loop playsInline muted>
                                            <source src={video} type="video/mp4" />
                                        </video>

                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent  ">
                                            <div className="absolute bottom-8 w-full px-6">
                                                <p className='text-[14px] font-normal'>that covers the full height of its container with Tailwind CSS, you can make use Tailwind CSS, you can make use</p>
                                                <div className='flex items-center justify-between gap-x-4 w-full mt-6'>
                                                    <h3 className="text-[14px] text-white flex items-center gap-x-5 capitalize">
                                                        <span className='text-gray-700 font-semibold'>that covers</span>
                                                        <span className='border border-gray-950 w-10'></span>
                                                        <span className='text-gray-900 italic font-triumvirate'>you can make</span>
                                                    </h3>
                                                    <h3 className="text-[16px] text-black font-bebas font-bold tracking-[1px] underline ">Vishnu Ads</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className='w-[50%] mx-auto'>

                                <div className='flex justify-end items-center w-full '>
                                    <Form />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* map location */}

                <section className='pt-10 pb-20 bg-gradient-to-t from-gray-200 to-gray-100'>
                    <div className=' w-[90%] mx-auto '>

                        <div className='pb-10'>
                            <div className='border-t border-gray-500 w-full pb-3'></div>
                            <h3 className='font-[poppins] text-[30px] font-bold uppercase'>Visit Our Office</h3>
                        </div>

                        <div className='flex items-start justify-center  gap-x-4 '>

                            <div className='w-[80%] mx-auto  drop-shadow-sm'>

                                <div className="relative w-full h-[55vh] overflow-hidden rounded-lg ">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.218023162894!2d80.21685470924521!3d13.045383595343925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e57e6bec73%3A0xd7246c6b177d9129!2sVishnu%20Ads%20And%20Ventures%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739524699414!5m2!1sen!2sin"
                                        className="absolute inset-0 w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Company location map"
                                    />
                                </div>
                            </div>

                            <div className='w-[20%] drop-shadow-sm  relative'>

                                <div className='h-full'>
                                    {/* <img src={contact} className='w-full h-[55vh] rounded-md object-cover ' alt='none' /> */}
                                </div>

                                <div className='absolute -top-32 left-0 w-full'>
                                    <div className='w-full'>
                                        {/* <img src={man} className='w-[40%] object-cover' /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Contact
