

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import Image from "next/image";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import {FaQuoteLeft} from "react-icons/fa";
SwiperCore.use([Navigation, Pagination]);

// testimonial data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


const TestimonialSlider = () => {
  return (
    <Swiper
    navigation={true}
      pagination={{
        clickable: true,
      }}
      className="h-[400px]"
    >
      {testimonialSlider.map((person , index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center h-full px-16 md:flex-row gap-x-8">
            {/* avatar, name , position */}
            <div className="w-full max-w-[300px] flex-col flex xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar  */}
                <div className="mx-auto mb-2">
                  <Image src={person.image} width={100} height={100} alt={person.name} />
                </div>
                {/* name  */}
                <div className="text-lg">
                  {person.name}
                </div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
              </div>
            </div>
             {/* quote and message  */}
            <div className="flex flex-col justify-center flex-1 before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon  */}
              <div className="mb-4">
                <FaQuoteLeft className="mx-auto text-4xl text-white xl:text-6xl/20 md:mx-0" />
              </div>
              {/* message */}
              <div className="text-center xl:text-lg md:text-left">{person.message}</div>
            </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
