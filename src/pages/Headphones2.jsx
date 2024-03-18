import { useState, useEffect } from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import head from "../assets/fast.png";
import rasm1 from "../assets/Bitmap (6).png";
import rasm2 from "../assets/Bitmap (7).png";
import rasm3 from "../assets/Bitmap (8).png";
import fast from "../assets/Group 3.png";
import fast1 from "../assets/fast1.png";
import fast2 from "../assets/image-removebg-preview(38).png";
import Card from "../components/Card";
function Headphones2() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/2")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Layout>
        {data && (
          <div>
            <div className="flex justify-center items-center w-[760px] h-[100px]">
              <Link to="/">
                <h2 className="text-center">Go back</h2>
              </Link>
            </div>
            <div className=" flex   md:justify-center md:items-center mb-10">
              <div className="w-full  md:w-[1210px]  flex flex-col xl:flex-row justify-between  items-center">
                <div
                  className="w-full md:w-[489px] h-[
352px] xl:w-[
540px] xl:h-[
  560px] bg-slate-100 p-[25px] sm:p-[50px] flex items-center justify-center"
                >
                  <img src={head} alt="" />
                </div>
                <div className="flex flex-col ">
                  <h2 className=" mb-[10px] text-center w-full xl:text-left text-[#D87D4A] text-[14px] loading-[19px] xl:w-[199px] h-[19px] sm:mb-[0px]">
                    NEW PRODUCT
                  </h2>
                  <h2 className="  mb-[40px] text-center xl:text-left font-bold text-[40px] loading-[44px] xl:w-[445px] h-[80px] sm:mb-[10px]">
                    {data.name}
                  </h2>
                  <p className=" text-center ml-5 sm:ml-[0px] mt-1 xl:text-left xl:mt-10 max-w-[445px] sm:h-[100px] text-[15px] loading-[25px] mb-3">
                    {data.description}
                  </p>
                  <p className=" text-center mr-10 xl:text-left">
                    $ {data.price / 1000}
                  </p>
                  <div className="flex justify-center items-center xl:justify-start xl:items-start gap-[10px]">
                    <div className="w-[120px] h-[48px] p-[15px] flex justify-between bg-slate-100">
                      <button> - </button>
                      <span className="font-bold">1</span>
                      <button> + </button>
                    </div>
                    <Link to="/">
                      <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                        See Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className=" block lg:flex max-w-[1110px] justify-between p-[0px] sm:p-[10px]">
                <div className="max-w-[635px] w-full">
                  <h2 className="text-black font-bold text-[32px] loading-[36px]">
                    FEATURES
                  </h2>
                  <p className="">{data.features}</p>
                </div>
                <div className="max-w-[650px] flex flex-col gap-[15px]">
                  <h2 className="text-black font-bold text-[32px] loading-[36px]">
                    IN THE BOX
                  </h2>
                  {data.includes.map((e, index) => {
                    return (
                      <div key={index} className="">
                        <p className="flex gap-[5px]">
                          <span className=" text-orange-600">
                            {e.quantity}x
                          </span>
                          <span>{e.item}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row  justify-center items-center gap-5 mt-10">
              <div className="flex flex-col gap-5">
                <div className="w-[445px]">
                  <img src={rasm1} alt="" width="100%" height="280px" />
                </div>
                <div className="w-[445px]">
                  <img src={rasm2} alt="" width="445px" height="280px" />
                </div>
              </div>

              <div className=" w-[445px] xl:w-[632px]  sm:h-[592px]">
                <img src={rasm3} alt="" width="632px" height="592px" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[1110px] flex flex-col">
                <div>
                  <h2 className="text-center text-[32px] loading-[36px] font-bold">
                    YOU MAY ALSO LIKE
                  </h2>
                </div>

                <div className="flex justify-center items-center">
                  <div className="max-w-[1110px] flex flex-col items-center xl:flex-row gap-10 w-full">
                    <div className="w-[350px] h-[471px] ">
                      <div className="w-[350px] h-[318] p-[75px] bg-slate-100 flex justify-center items-center">
                        <img src={fast} alt="" width="148px" />
                      </div>
                      <div className="mt-10 ">
                        <h2 className="text-center font-bold text-[24px] loading-[32px] mb-5">
                          XX99 MARK II
                        </h2>
                        <div className="flex justify-center items-center">
                          <Link to='/'>
                              <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                                See Product
                              </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="w-[350px] h-[471px]">
                      <div className="w-[350px] h-[318] p-[80px] bg-slate-100 flex justify-center items-center">
                        <img src={fast1} alt="" width="148px" />
                      </div>
                      <div className="mt-10">
                        <h2 className="text-center font-bold text-[24px] loading-[32px] mb-5">
                          XX59
                        </h2>
                        <div className="flex justify-center items-center">
                          <Link to='/'>
                              <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                                See Product
                              </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="w-[350px] h-[471px]">
                      <div className="w-[350px] h-[318] p-[68px] bg-slate-100 flex justify-center items-center">
                        <img src={fast2} alt="" width="148px" />
                      </div>
                      <div className="mt-10">
                        <h2 className="text-center font-bold text-[24px] loading-[32px] mb-5">
                          ZX9 SPEAKER
                        </h2>
                        <div className="flex justify-center items-center">
                          <Link to='/'>
                              <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                                See Product
                              </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card />
          </div>
        )}
      </Layout>
    </>
  );
}

export default Headphones2;
