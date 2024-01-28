// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
  <nav className='fixed bottom-0 flex flex-col items-center mt-auto xl:justify-center gap-y-4 h-max xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    {/* inner  */}
      <div className='flex items-center justify-between w-full px-4 py-8 text-3xl bg-white/10 h-[80px] xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 xl:h-max backdrop-blur-sm xl:text-xl xl:rounded-full'>
      {navData.map((link, index) =>{
        return ( <Link 
        className={`${link.path===pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all`}
        href={link.path} key={index}>
          {/* tooltip */}
          <div className='absolute right-0 hidden pr-14 xl:group-hover:flex'>
            <div className='relative flex items-center bg-white text-primary p-[6px] rounded-[3px]'>
               <div className='text-[15px] leading-none font-semibold capitalize'>{link.name}</div>
            </div>
            {/* triangle */}
            <div className='border-l-8 border-r-0 border-solid absolute-right-2 border-y-transparent border-l-white'></div>
          </div>
          
          {/* icons */}
          <div> {link.icon} </div>
           </Link> );
      })}
    </div>
  </nav>
  );
};

export default Nav;
