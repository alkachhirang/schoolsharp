import React from 'react';
import { Telivision, Pencil } from './IconImg';

const MostpopularCourses = () => {
    return (
        <div className='lg:py-[160px] md:py-[70px] sm:py-[50px] py-[40px]'>
            <div className='container xl:max-w-[1074px] mx-auto lg:px-3 px-6'>
                <div className='flex justify-center items-center flex-col' data-aos="fade-down">
                    <h2 className='text-[14px] text-[#96BB7C] font-bold leading-[171%] tracking-[0.2px] text-center m-0 pb-[10px]'>Practice Advice</h2>
                    <p className='text-[#252B42] text-[24px] font-bold leading-[133%] text-center m-0 pb-[10px]'>Most Popular Courses</p>
                    <p className='text-[14px] font-normal leading-[142%] tracking-[0.2px] text-[#737373] m-0 lg:max-w-[469px] text-center'>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex justify-center items-center gap-[30px] md:flex-row flex-col pt-[35px] sm:pt-[45px] md:pt-[80px]'>
                    <div className='md:max-w-[328px] w-full shadow shadow-[0px_13px_19px_0px rgba(0,_0,_0,_0.07)] bg-[#ffffff] py-[35px] px-[40px]' data-aos="fade-right">
                        <div className='flex items-center justify-center flex-col'>
                            <Telivision />
                            <p className='text-[#252B42] text-[16px] font-bold leading-[150%] tracking-[0.1px] m-0 pt-[20px] pb-[20px] text-center'>training Courses</p>
                            <div className='h-[2px] w-[50px] bg-[#E74040] mb-[20px]'></div>
                            <p className='md:max-w-[136px] text-[14px] font-normal leading-[142%] tracking-[0.2px] m-0 text-[#737373] text-center'>The gradual
                                accumulation and
                                small-scale..</p>
                        </div>
                    </div>
                    <div className='md:max-w-[328px] w-full shadow shadow-[0px_13px_19px_0px rgba(0,_0,_0,_0.07)] bg-[#ffffff] py-[35px] px-[40px]' data-aos="fade-left">
                        <div className='flex items-center justify-center flex-col'>
                            <Pencil />
                            <p className='text-[#252B42] text-[16px] font-bold leading-[150%] tracking-[0.1px] m-0 pt-[20px] pb-[20px] text-center'>2,769 online courses	</p>
                            <div className='h-[2px] w-[50px] bg-[#E74040] mb-[20px]'></div>
                            <p className='md:max-w-[136px] text-[14px] font-normal leading-[142%] tracking-[0.2px] m-0 text-[#737373] text-center'>The gradual
                                accumulation and
                                small-scale..</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MostpopularCourses
