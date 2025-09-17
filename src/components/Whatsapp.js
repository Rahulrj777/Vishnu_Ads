import { Link } from 'react-router-dom';
import whatsapp from '../images/whatsapp.png'

const Whatsapp = () => {
    return (
        <div>

            <div className='fixed bottom-6 md:bottom-10 left-5 md:left-8 z-30 flex flex-col gap-y-5 md:gap-y-8'>

                <div className="">
                    <Link to="https://api.whatsapp.com/send?phone=8531818181" target='_blank' className="">
                        <div className="relative flex  w-7 md:w-10  h-7 md:h-10 hover:animate-bounce duration-1000">
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                            <div className="relative inline-flex rounded-full w-7 md:w-10  h-7 md:h-10 bg-green-500"></div>
                            <img src={whatsapp} className='w-28 object-cover' alt='none'  />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Whatsapp