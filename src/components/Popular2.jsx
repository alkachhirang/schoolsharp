import React from 'react';
import Girlimg from '../assets/images/png/popular-girl-img.png';
import { Learnsvg } from './IconImg'

const Popular2 = () => {
    return (
        <div className='lg:py-[160px] md:py-[70px] sm:py-[50px] py-[40px]'>
            <div className='container xl:max-w-[1074px] mx-auto lg:px-3 px-6'>
                <div className='flex flex-row flex-wrap items-center'>
                    <div className='md:w-1/2 w-full' data-aos="fade-right">
                        <img src={Girlimg} alt="Girlimg" className='w-full max-w-[544px]' />
                    </div>
                    <div className='md:w-1/2 w-full flex md:justify-end pt-[30px] md:pt-[0]' data-aos="fade-left">
                        <div className=''>
                            <div className='w-[94px] h-[7px] bg-[#E74040]'></div>
                            <p className='font-bold  md:text-[40px] text-[32px] text-[#252B42] leading-[125%] tracking-[0.2px] m-0 pt-[15px] pb-[15px] md:pt-[35px] md:pb-[35px] lg:max-w-[257px]'>Our Popular
                                Courses</p>
                            <p className='font-normal text-[14px] text-[#737373] leading-[142%] tracking-[0.2px] mb-[15px] md:pb-[35px] m-0 md:max-w-[351px]'>Problems trying to resolve the conflict between
                                the two major realms of Classical physics:
                                Newtonian mechanics </p>
                            <div className='flex gap-[10px] items-center'>
                                <p className='font-bold text-[14px] leading-[171%] tracling-[0.2px] text-[#96BB7C] m-0'>Learn More</p>
                                <Learnsvg />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Popular2
