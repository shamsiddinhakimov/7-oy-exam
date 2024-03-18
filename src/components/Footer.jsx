import Logo from "../assets/audiophile 2.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";
import twiter from "../assets/twiter.svg";
import instagram from "../assets/instagram.svg";
import man from "../assets/Bitmap (1).png";
function Footer() {
  return (
    <>
      <div className="mb-10 flex mx-auto w-[689] xl:w-[1110px] flex-col justify-start items-center xl:justify-center xl:items-center xl:flex-row-reverse">
        <div className="bt ">
          <img
            className="w-[327px] h-[300px] sm:w-[689px] sm:h-[300px] xl:w-[540px] xl:h-[588px]"
            src={man}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center xl:justify-start xl:items-start  max-w-[245px] ml-[30px] flex-col mr-[0px] xl:mr-40">
          <h2 className=" text-center xl:text-left  text-[30px] xl:text-[44px] font-bold loading-[44px] ">
            BRINGING YOU THE
            <span className="text-[#D87D4A]">BEST</span>
            AUDIO GEAR
          </h2>

          <p className=" text-center xl:text-left opacity-[50%] font-normal text-[15px] loading-[25px] w-[200px] sm:w-[300px] xl:w-[345px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>

      <div className="mr-auto ml-auto bg-[#101010] flex justify-between items-center flex-col">
        <div className="w-full max-w-[1200px] h-[80px] flex  items-center sm:items-start text-white p-[40px] sm:p-[65px] flex-col md:flex md:justify-between md:items-center md:flex-row ">
          <div className="flex gap-9">
            <div>
              <img className="cursor-pointer" src={Logo} alt="" />
            </div>
          </div>
          <div className="flex gap-8 mx-1 max-w-[600px] flex-col  sm:flex-row w-full md:my-[0px]  my-[5px] ">
            <Link to="/">
              <h2 className=" mt-[10px] sm:mt-[0px] text-center  text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300">
                HOME
              </h2>
            </Link>
            <Link to="/headphones">
              <h2 className=" text-center  text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300">
                HEADPHONES
              </h2>
            </Link>
            <Link to="/speakers">
              <h2 className=" text-center  text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300 ">
                SPEAKERS
              </h2>
            </Link>
            <Link to="/earphones">
              <h2 className=" text-center  text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300">
                EARPHONES
              </h2>
            </Link>
          </div>
        </div>
        <div className="max-w-[327px] sm:max-w-[1050px] mt-[200px] pb-[46px] w-full px-[0px] sm:px-[20px] sm:mt-[0px] ">
          <div>
            <p className=" text-start font-normal text-[15px] loading-[25px] max-w-[540px]  w-full text-white opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="   block sm:flex justify-between">
            <div className="mt-5">
              <h2 className="font-bold text-[15px] loading-[25px] max-w-[540px] w-full text-white opacity-50">
                Copyright 2021. All Rights Reserved
              </h2>
            </div>
            <div className="  flex justify-center sm:justify-normal gap-[16px] my-[15px] md:my-[0px]">
              <img className=" cursor-pointer" src={facebook} alt="" />
              <img className=" cursor-pointer" src={twiter} alt="" />
              <img className=" cursor-pointer" src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
