import banner from '../images/banner/about_banner.webp'
import about1 from '../images/about/about-1.jpg'
import about2 from '../images/about/about-2.jpg'


const About = () => {
    return (
        <>
            <div>

                <section>
                    <div className=''>

                        <div>
                            <div>
                                <img src={banner} className='w-full object-cover' alt='none' />
                            </div>
                        </div>




                        <section className='py-20 font-[poppins]'>
                            <div className='w-[80%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <div className='w-[50%] mx-auto'>
                                        <div className='relative'>
                                            <div className='relative'>
                                                <img src={about2} className='w-[50%] rounded-3xl object-cover' alt='none' />
                                                <div className='absolute left-12 -bottom-14 rounded-full size-32 bg-yellow-500 '>
                                                    <div className='flex flex-col gap-y-4 justify-center items-center h-full'>
                                                        <h3 className='font-bold'>G</h3>
                                                        <p>4.8 Rating</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='absolute top-12 left-28 w-full h-full flex justify-center items-center'>
                                                <img src={about1} className='w-[50%] rounded-3xl bg-white p-3 object-cover drop-shadow-md shadow-sm' alt='none' />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='w-[50%] mx-auto'>

                                        <div>

                                            <p className='mb-4 uppercase'>Who We Are</p>

                                            <div className='flex flex-col gap-y-4  text-[14px] font-[roboto]'>
                                                <p>
                                                    Two decades ago in Chennai, before AI met advertising and before cinema met classrooms,  one man set out to change how stories are told — and sold.
                                                    That man is Dr. Rajesh Ravindran.
                                                </p>
                                                <p>
                                                    From launching Vishnu Ads as a one-man mission to becoming the driving force behind Vishnu Ads & Ventures Private Limited and BigBay Cinema Factory, Rajesh
                                                    didn't just build businesses — he built bridges. Between creativity and commerce. Between tradition and technology. Between brands and the people they long to reach.
                                                </p>
                                                <p>
                                                    His agency has powered 300+ film promotions, delivered 50+ tech-first digital solutions, and mentored hundreds of media professionals. Whether it’s a
                                                    campaign for a retail giant, a digital push for a healthcare brand, or crafting India’s first AI-integrated film academy, he leads with one belief — that
                                                    every brand is a story waiting to be told right.
                                                </p>
                                                <p>
                                                    But Rajesh isn't just a marketer. He's a media educator, a digital innovator, and a brand architect. His Cinema Factory Junior program brought film education
                                                    to children, his AR/VR tools made advertising immersive, and his partnerships with South Indian cinema unions bridged the classroom with the soundstage.
                                                </p>
                                                <p>
                                                    For his transformative work in media and storytelling, he was awarded an Honorary Doctorate in Journalism in 2018.
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                </section>


            </div>

        </>
    )
}

export default About