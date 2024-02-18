//  components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const Services = () => {
  return ( <div className="flex items-center h-full py-36 bg-primary/30">
   <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className="flex-col flex text-center xl:w-[30vw] lg:text-left mb-4 xl:mb-0">
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show"  exit="hidden" className="h2 xl:mt-8">My services <span className="text-accent">.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show"  exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0"> Lorem ipsum dolor sit, ament consectetur adipisicing eiil.A evenlet dignifisimos district tempore harum laudanthum </motion.p>
        </div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show"  exit="hidden" className="w-full xl:max-w-[65%]">
        <ServiceSlider />
        </motion.div>
        {/* slider */}
      </div>   
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
