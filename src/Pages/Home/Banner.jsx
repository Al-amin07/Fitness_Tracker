import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import fit from '../../../public/fit4.jpg'
import fit2 from '../../../public/fit5.jpg'
import fit3 from '../../../public/fit7.jpg'
// import fit4 from '../../../public/fit9.jpg'
import { TypeAnimation } from 'react-type-animation';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (

<>
<Swiper
  style={{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }}
  spaceBetween={10}
  navigation={true}
  thumbs={{ swiper: thumbsSwiper }}
  modules={[FreeMode, Navigation, Thumbs]}
  className="mySwiper2 h-[400px] md:h-[450px] lg:h-[600px] rounded-xl"
>
  <SwiperSlide className="border-2">
    <img className="w-full h-full" src={fit} />
    <div className=" absolute top-[60px] md:top-[100px] lg:top-[200px] ml-12 lg:ml-20 z-20 space-y-5 ">
    <TypeAnimation
      sequence={[
      
        'Track Your Way to Fitness',
        1000, 
        'Empower Your Workout',
        1000,
        'Achieve Your Best Self',
        1000,
        'Revolutionize Your Fitness Journey',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em',color: 'white', display: 'inline-block' }}
      repeat={Infinity}
    />
        <p className="lg:w-1/2 text-white">Join the journey to a healthier you with our advanced fitness tracker. Monitor your progress, set goals, and achieve more every day!Discover a new way to stay fit with our innovative fitness tracker. Seamlessly track, analyze, and improve your performance every day</p>
        <Link to='/all-class' className="inline-flex h-10  flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-600 text-white px-5 text-sm font-medium tracking-wide">See Our Classess</Link>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img className="w-full h-full" src={fit2} />
    <div className=" absolute md:left-[300px] lg:left-[500px] text-right  top-[60px] md:top-[100px] lg:top-[200px] mr-12 lg:mr-20 z-20 space-y-5 ">
    <TypeAnimation
      sequence={[
      
        'Track Your Way to Fitness',
        1000, 
        'Empower Your Workout',
        1000,
        'Achieve Your Best Self',
        1000,
        'Revolutionize Your Fitness Journey',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em',color: 'white', display: 'inline-block' }}
      repeat={Infinity}
    />
        <p className=" text-white">Join the journey to a healthier you with our advanced fitness tracker. Monitor your progress, set goals, and achieve more every day! Discover a new way to stay fit with our innovative fitness tracker. Seamlessly track, analyze, and improve your performance every day</p>
        <Link to='/all-class' className="inline-flex h-10  flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-600 text-white px-5 text-sm font-medium tracking-wide">See Our Classess</Link>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img className="w-full h-full" src={fit3} />
    <div className=" absolute top-[60px] md:top-[100px] lg:top-[200px] ml-12 lg:ml-20 z-20 space-y-5 ">
      
        <TypeAnimation
      sequence={[
      
        'Track Your Way to Fitness',
        1000, 
        'Empower Your Workout',
        1000,
        'Achieve Your Best Self',
        1000,
        'Revolutionize Your Fitness Journey',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em',color: 'white', display: 'inline-block' }}
      repeat={Infinity}
    />
        <p className="lg:w-1/2  text-white">Join the journey to a healthier you with our advanced fitness tracker. Monitor your progress, set goals, and achieve more every day!Discover a new way to stay fit with our innovative fitness tracker. Seamlessly track, analyze, and improve your performance every day</p>
        <Link to='/all-class' className="inline-flex h-10  flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-600 text-white px-5 text-sm font-medium tracking-wide">See Our Classess</Link>
    </div>
  </SwiperSlide>

</Swiper>
<Swiper
  onSwiper={setThumbsSwiper}
  spaceBetween={10}
  slidesPerView={6}
  freeMode={true}
  watchSlidesProgress={true}
  modules={[FreeMode, Navigation, Thumbs]}
  className="mySwiper h-[100px] -mt-4"
>
  <SwiperSlide>
    <img className="h-full" src={fit}/>
  </SwiperSlide>
  <SwiperSlide>
    <img className="h-full" src={fit2}/>
  </SwiperSlide>
  <SwiperSlide>
    <img className="h-full" src={fit3} />
  </SwiperSlide>
  {/* <SwiperSlide>
    <img className="h-full" src={fit4} />
  </SwiperSlide> */}
  {/* <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
  </SwiperSlide> */}
</Swiper>
</>
  );
};

export default Banner;
