import { Carousel } from "flowbite-react";
import style from './Home.module.css'

export default function Home() {
  return (
    <div className="h-screen">
      <Carousel
        indicators={false}
        leftControl={<span className="hidden"></span>}
        rightControl={<span className="hidden"></span>}
      >
        <div className={`${style.img1} flex flex-col h-full justify-center `}>
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-center sm:text-center lg:text-start mb-5 lg:pl-[15%]">
            Hi!<hr className="opacity-0"/>
            I'm mohamed
          </h1>
          <p className=" mb-5 text-center lg:pl-[15%] sm:text-center lg:text-start">
            100% react tailwind templates Made<hr className="opacity-0"/>
            By Colorlib.com
          </p>
          <div className="self-center lg:self-start lg:pl-[15%]">
            <button type="button" className="border border-black px-4 py-2 font-thin" style={{ width: 'auto' }}>
              DOWNLOAD CV <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
        <div className={`${style.img2} flex flex-col h-full justify-center`}>
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-center sm:text-center lg:text-start mb-5 lg:pl-[15%]">
            I am<hr className="opacity-0"/>
            I'm developer
          </h1>
          <p className="mb-5 text-center lg:pl-[15%] sm:text-center lg:text-start">
            100% react tailwind templates Made<hr className="opacity-0"/>
            By Colorlib.com
          </p>
          <div className="self-center lg:self-start lg:pl-[15%]">
            <button type="button" className="border border-black px-4 py-2 font-thin" style={{ width: 'auto' }}>
              VIEW PORTFOLIO <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}