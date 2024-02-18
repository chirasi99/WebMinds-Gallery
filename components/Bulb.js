// next image
import Image from "next/image";

const Bulb = () => {
  return ( <div className="absolute z-10 duration-75 -left-36 -botto-12 rotate-12 mix-blend-color-dodge animate-pulse w-[200px] xl:w-[260px]">
    <Image src={'/bulb.png'} width={260} height={200} className="w-full h-full" alt='' />
  </div>
  );
};

export default Bulb;
