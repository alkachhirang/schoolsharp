import React from 'react';
import {Playbtn} from './IconImg';
import Popularimg from '../assets/images/png/popular-img.png';

const PopularCourses = () => {
    return (
        <div className='lg:py-[160px] md:py-[70px] sm:py-[50px] py-[35px]'>
            <div className='container xl:max-w-[1074px] mx-auto lg:px-3 px-6'>
                <div className='flex justify-center items-center flex-col' data-aos="fade-down">
                    <h2 className='text-[14px] text-[#96BB7C] font-bold leading-[171%] tracking-[0.2px] text-center m-0 pb-[10px]'>Practice Advice</h2>
                    <p className='text-[#252B42] text-[24px] font-bold leading-[133%] text-center m-0 pb-[10px]'>Our Popular Courses</p>
                    <p className='text-[14px] font-normal leading-[142%] tracking-[0.2px] text-[#737373] m-0 lg:max-w-[469px] text-center'>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex justify-center items-center sm:pt-[40px] pt-[20px] md:pt-[80px] relative'>
                    <img src={Popularimg} alt="Popularimg" className='rounded-[20px] w-full max-w-[688px]' />
                    <div className='absolute cursor-pointer left-0 right-0 top-[30px] bottom-0 flex justify-center items-center'>
                        <Playbtn />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PopularCourses
