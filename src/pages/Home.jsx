import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Calonka from "../assets/image-removebg-preview(38).svg";
import naushnik from "../assets/Bitmap (2).png";
function Home() {
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Layout>
        <div className="mr-auto ml-auto bg-[#000000] flex justify-between items-center flex-col py-[60px] ">
          <div className="w-full max-w-[1200px]  flex justify-center  text-white p-5 back lg:justify-between">
            <div className="pt-[120px]">
              <div className="flex justify-center items-center lg:items-start lg:justify-start">
                <h2 className=" text-center max-w-[199px]  h-[19px]  opacity-[50%] font-normal text-[14px] loading-[19px] mb-[20px]    lg:text-left">
                  N E W P R O D U C T
                </h2>
              </div>
              <h2 className="mr-auto ml-auto font-normal text-[46px] loading-[58px] w-[300px] mb-[20px] lg:text-left uppercase sm:text-[56px] sm:w-[396px]">
                XX99 Mark II HeadphoneS
              </h2>
              <p className="text-center w-[349px] opacity-[75%] font-normal text-[15px] loading-[25px] lg:text-left sm:w-[400px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                className="flex items-center justify-center sm:items-start lg:justify-start"
                to="/headphones/1"
              >
                <button className=" mt-[40px] text-white bg-orange-400 p-[15px] w-[160px] h-[48px] flex items-center justify-center text-[15px] loading-[17px] cursor-pointer hover:bg-orange-300 duration-150">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>
        <main className="mb-10">
          <Card />
          <div className=" flex justify-center items-center">
            <div className="w-[1110px] justify-between  bg-orange-400 px-[60px]  flex flex-col xl:flex-row items-center">
              <div className=" w-[197px] h-[237px] xl:w-[410px] xl:h-[493px]">
                <img src={Calonka} alt="" width="410px" height="400px" />
              </div>
              <div>
                <h2 className="text-center xl:text-left text-white font-bold text-[50px] loading-[58px]  ">
                  ZX9 SPEAKER
                </h2>

                <div className="mt-10">
                  <p className="text-center xl:text-left text-white opacity-[75%] text-[15px] loading-[25px] w-[349px] h-[75px]">
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                  </p>
                </div>
                <div className="flex flex-col  items-center  xl:flex-row xl:items-start">
                  <Link to="/speakers">
                    <button className=" text-white text-[13px] loading-[17px] bg-black p-[10px] w-[160px] h-[48px] hover:bg-slate-600">
                      See Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 ">
            <div className="ba   w-[1110px] h-[320px] flex flex-col justify-center items-start gap-[10px] pl-[50px] rounded-[5px] ">
              <h2 className="text-[#000000] font-bold text-[28px] loading-[38px]">
                ZX7 SPEAKER
              </h2>
              <div>
                <Link to="/speakers">
                  <button className="text-[13px] border border-black loading-[17px] font-medium text-black bg-white hover:text-white hover:bg-black p-[15px] w-[160px] h-[48px]">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="max-w-[1110px] flex w-full">
              <div className="max-w-[625px] w-full">
                <img src={naushnik} alt="" />
              </div>
              <div className="flex max-w-[500px] w-full flex-col justify-center items-center bg-slate-200 rounded-[5px]">
                <h2 className="text-[#000000] font-bold text-[28px] loading-[38px]">
                  YX1 EARPHONES
                </h2>
                <Link to="/earphones">
                  {" "}
                  <button className="text-[13px] border border-black loading-[17px] font-medium text-black bg-white hover:text-white hover:bg-black p-[15px] w-[160px] h-[48px]">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Home;
