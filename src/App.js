import './App.css';
import React, { useState, useEffect } from 'react';
import ClientMatters from './components/ClientMatters';
import Footer from './components/Footer';
import Header from './components/Header';
import MostpopularCourses from './components/MostpopularCourses';
import Newsletter from './components/Newsletter';
import Popular2 from './components/Popular2';
import PopularCourses from './components/PopularCourses';
import QualityEducation from './components/QualityEducation';
import Backtotop from './assets/images/png/backtotop.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (


    <div>
      {screenLoading ? (
        <Preloader/>
      ) : (
        <>
          <div>
            <Header />
            <PopularCourses />
            <MostpopularCourses />
            <Popular2 />
            <ClientMatters />
            <QualityEducation />
            <Newsletter />
            <Footer />
          </div>
          <div className='overflow-hidden'>
            <img onClick={() => top()} src={Backtotop} alt='Backtotop' className={backToTop ? "back_to_top right-[1%] bottom-[2%] fixed bg-[#96BB7C] rounded-[40px] cursor-pointer max-w-[45px] sm:max-w-[50px] z-[5]" : "hidden"} />
          </div>
        </>
      )
}
    </div >
  );
}

export default App;
