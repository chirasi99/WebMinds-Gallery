// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants';

const Home = () => {
  return <div className='h-full bg-primary/60'>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left'>
        {/* title */}
        <h1 className='h1'>
          Transforming Ideas <br /> Into{''}
          <span className='text-accent'>Digital Reality</span>
         </h1>
        {/* subtitle */}
        <p className='max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* btn */}
        <div className='relative flex justify-center xl:hidden'>
          <ProjectsBtn />
        </div>
      </div>
    </div>
    {/* image */}
    <div>image</div>
    </div>;
};

export default Home;
