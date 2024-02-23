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

// components 
import TestimonialSlider from "../../components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
  <div className="h-full py-32 text-center bg-primary/30">
    <div className="container flex flex-col justify-center h-full mx-auto">
      {/* title  */}
      <motion.h2 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mb-8 h2 xl:mb-0">
        What clients <span className="text-accent">say.</span>
      </motion.h2>
      {/* slider */}
      <motion.div
       variants={fadeIn('up', 0.4)}
       initial="hidden"
       animate="show"
       exit="hidden"
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  </div>
  );
};

export default Testimonials;
