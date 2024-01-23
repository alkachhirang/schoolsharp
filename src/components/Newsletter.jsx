import React from 'react'

const Newsletter = () => {
    return (
        <div id='login' className='bg-[#2D4059] lg:py-[160px] md:py-[70px] sm:py-[60px] py-[50px]'>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-3 px-6' data-aos="fade-down">
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-bold tracking-[0.2px] text-[14px] text-[#96BB7C] leading-[171%] text-center pb-[10px] m-0'>Newsletter</h2>
                    <p className='text-[24px] font-bold leading-[133%] tracking-[0.1px] text-[#FFFFFF] text-center m-0'>Video in Live Action</p>
                    <p className='text-[14px] font-normal tracking-[0.2px] leading-[141%] text-center m-0 lg:max-w-[469px] text-[#FFFFFF]'>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                    <div className='md:mt-[80px] mt-[40px] max-w-[688px] w-full flex'>
                        <input type='email' placeholder='Your Email' required className='bg-[#F9F9F9] text-[#737373] outline-none w-full py-[15px] px-[20px] rounded-bl-[5px] rounded-tl-[5px] border-t border-s border-l !border-solid !border-[#E6E6E6]' />
                        <button className='font-normal text-[14px] text-[#ffffff] leading-[200%] tracking-[0.2px] py-[15px] px-[22.5px] bg-[#96BB7C] rounded-tr-[5px] rounded-br-[5px] border-t border-e border-l border-b !border-solid !border-[#E6E6E6]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
