import React from 'react';
import { useState } from 'react';
import Heroimg from '../assets/images/png/hero-img.png';
import Cornerimg1 from '../assets/images/png/hero-corner1.png';
import Cornerimg2 from '../assets/images/png/hero-corner2.png';
import { Arrow } from './IconImg';


const Header = () => {
  const [nav, setNav] = useState(true)
  const [show, setshow] = useState(true)
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <div className='relative'>
      <img src={Cornerimg1} alt="Cornerimg1" className='absolute left-0 top-0 max-w-[111px] hidden sm:block' />
      <img src={Cornerimg2} alt="Cornerimg1" className='absolute right-0 top-0 max-w-[179px] hidden sm:block' />
      <div className='container xl:max-w-[980px] mx-auto md:px-3 px-6'>
        <div className='flex justify-between items-center py-[16px] relative z-[3]'>
          <div className='flex items-center gap-[87px]'>
            <p className='text-[#252B42] text-[18px] sm:text-[24px] font-bold tracking-[0.1px] leading-[133%] m-0 cursor-pointer'>Brandname</p>
            <ul className={`${nav ? "left-[-100%]" : "left-0 bg-[#ffffff]"} flex items-center gap-[21px] flex-row max-lg:fixed max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300`}>
              <li onClick={() => setshow(!show)}><a href='#home' className='text-[#737373] font-bold text-[14px] tracking-[0.2px] leading-[171%] hover:after:w-[100%] after:w-0 after:absolute after:bg-[#737373] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[5px] after:transition-all after:duration-300 after:ease-linear'>Home</a></li>
              <li onClick={() => setshow(!show)}><a href='#product' className='text-[#737373] font-bold text-[14px] tracking-[0.2px] leading-[171%] hover:after:w-[100%] after:w-0 after:absolute after:bg-[#737373] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[5px] after:transition-all after:duration-300 after:ease-linear'>Product</a></li>
              <li onClick={() => setshow(!show)}><a href='#pricing' className='text-[#737373] font-bold text-[14px] tracking-[0.2px] leading-[171%] hover:after:w-[100%] after:w-0 after:absolute after:bg-[#737373] after:h-[2px] relative after:left-[0] after:bottom-[-3px] after:rounded-[5px] after:transition-all after:duration-300 after:ease-linear'>Pricing</a></li>
              <li onClick={() => setshow(!show)}><a href='#contact' className='text-[#737373] font-bold text-[14px] tracking-[0.2px] leading-[171%] hover:after:w-[100%] after:w-0 after:absolute after:bg-[#737373] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[5px] after:transition-all after:duration-300 after:ease-linear'>Contact</a></li>
              <li><a href='' className='font-bold text-[14px] tracking-[0.2px] leading-[157%] text-[#96BB7C] m-0 cursor-pointer hover:after:w-[100%] after:w-0 after:absolute after:bg-[#96BB7C] after:h-[2px] relative after:left-[0] after:bottom-[-1px] after:rounded-[5px] after:transition-all after:duration-300 after:ease-linear lg:hidden'>Login</a></li>
            </ul>
          </div>
          <div className='flex items-center gap-[15px] sm:gap-[25px] lg:gap-[45px]'>
            <p ><a href='#login' onClick={() => setshow(!show)} className='font-bold text-[14px] tracking-[0.2px] leading-[157%] text-[#96BB7C] m-0 cursor-pointer hover:after:w-[100%] after:w-0 after:absolute after:bg-[#96BB7C] after:h-[2px] relative after:left-[0] after:bottom-[-1px] after:rounded-[5px] after:transition-all after:duration-300 after:ease-linear hidden lg:block'>Login </a></p>
            <div>
              <button className='text-[14px] font-bold leading-[157%] tracking-[0.2px] text-[#FFFFFF] py-[11px] px-[15px] sm:py-[15px] sm:px-[25px] rounded-[5px] bg-[#96BB7C] flex items-center gap-[15px] text-nowrap hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500'>JOIN US <Arrow /></button>
            </div>
            <div onClick={() => setNav(!nav)} className='lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-[6] flex justify-between flex-col'>
              <span className={`${nav ? '' : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"} bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
              <span className={`${nav ? '' : "hidden"} bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
              <span className={`${nav ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
            </div>
          </div>
        </div>
      </div >
      <div id='home' className='container xl:max-w-[1320px] mx-auto lg:px-3 px-6 lg:pt-[169px] pt-[65px]'>
        <div className='flex flex-wrap flex-row  justify-center'>
          <div className='lg:w-1/2 flex justify-center lg:pt-[50px]' data-aos="fade-right">
            <div>
              <h2 className='font-bold text-[16px] tracking-[0.1px] text-[#96BB7C] leading-[150%] m-0 pb-[30px] lg:text-start text-center'>Join Us</h2>
              <p className='lg:text-[58px] md:text-[50px] sm:text-[44px] text-[37px] text-[#252B42] tracking-[0.2px] font-bold uppercase leading-[137%] lg:max-w-[542px] pb-[15px] lg:pb-[30px] m-0 lg:text-start text-center'>HIGH QUALITY COURSES </p>
              <p className='font-normal text-[20px] tracking-[0.2px] leading-[150%] text-[#737373] lg:max-w-[458px] m-0 pb-[30px] lg:text-start text-center'>Every day brings with it a fresh set of learning possibilities.</p>
              <div className='flex gap-[10px] items-center justify-center lg:items-start lg:justify-start'>
                <button className='text-[14px] font-bold leading-[157%] tracking-[0.2px] text-[#FFFFFF] py-[15px] px-[40px] rounded-[5px] bg-[#96BB7C] text-nowrap hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500'>JOIN US</button>
                <button className='text-[14px] font-bold leading-[157%] tracking-[0.2px] text-[#96BB7C] py-[15px] px-[40px] rounded-[5px] border border-[#96bb7c] border-solid text-nowrap hover:shadow-[0_2px_15px_rgba(150,_187,_124,_1)] transition-all ease-linear duration-500'>Learn More</button>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 pt-[40px] lg:pt-[0] flex lg:justify-end' data-aos="fade-left">
            <img src={Heroimg} alt="Heroimg" className='w-full sm:max-w-[550px] max-w-[472px]' />
          </div>
        </div>

      </div>


    </div >
  )
}

export default Header
