import Layout from "../layout/layout";
import head from "../assets/Group 3.png";
import fast from "../assets/fast.png";
import fast1 from "../assets/fast1.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
function Headphones() {
  return (
    <Layout>
      <div className="mr-auto ml-auto bg-[#000000] flex justify-between items-center flex-col py-[60px] mb-[60px]">
        <div className="w-full max-w-[1200px]  flex justify-center  text-white p-5">
          <h2 className="font-bold text-[40px] loading-[44px] ">HEADPHONES</h2>
        </div>
      </div>
      <main className="">
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
                XX99 Mark II Headphones
              </h2>
              <p className=" text-center ml-5 sm:ml-[0px] mt-1 xl:text-left xl:mt-10 max-w-[445px] sm:h-[100px] text-[15px] loading-[25px] mb-3">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <div className="flex justify-center items-center xl:justify-start xl:items-start">
                <Link to="/headphones/1">
                  <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex   md:justify-center md:items-center mb-10">
          <div className="w-full  md:w-[1210px]  flex flex-col xl:flex-row-reverse justify-between  items-center">
            <div
              className="w-full md:w-[489px] h-[
352px] xl:w-[
  540px] xl:h-[
    560px] bg-slate-100 p-[25px] sm:p-[50px] flex items-center justify-center"
            >
              <img src={fast} alt="" />
            </div>
            <div className="flex flex-col ">
              <h2 className=" mb-[10px] text-center w-full xl:text-left text-[#D87D4A] text-[14px] loading-[19px] xl:w-[199px] h-[19px] sm:mb-[0px]">
                NEW PRODUCT
              </h2>
              <h2 className="  mb-[40px] text-center xl:text-left font-bold text-[40px] loading-[44px] xl:w-[445px] h-[80px] sm:mb-[10px]">
                XX99 Mark I Headphones
              </h2>
              <p className=" text-center ml-5 sm:ml-[0px] mt-1 xl:text-left xl:mt-10 max-w-[445px] sm:h-[100px] text-[15px] loading-[25px] mb-3">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <div className="flex justify-center items-center xl:justify-start xl:items-start">
                <Link to="/headphones/2">
                  <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex   md:justify-center md:items-center mb-10">
          <div className="w-full  md:w-[1210px]  flex flex-col xl:flex-row justify-between  items-center">
            <div
              className="w-full md:w-[489px] h-[
352px] xl:w-[
  540px] xl:h-[
    560px] bg-slate-100 p-[25px] sm:p-[50px] flex items-center justify-center"
            >
              <img src={fast1} alt="" />
            </div>
            <div className="flex flex-col ">
              <h2 className=" mb-[10px] text-center w-full xl:text-left text-[#D87D4A] text-[14px] loading-[19px] xl:w-[199px] h-[19px] sm:mb-[0px]">
                NEW PRODUCT
              </h2>
              <h2 className="  mb-[40px] text-center xl:text-left font-bold text-[40px] loading-[44px] xl:w-[445px] h-[80px] sm:mb-[10px]">
                XX59 Headphones
              </h2>
              <p className=" text-center ml-5 sm:ml-[0px] mt-1 xl:text-left xl:mt-10 max-w-[445px] sm:h-[100px] text-[15px] loading-[25px] mb-3">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <div className="flex justify-center items-center xl:justify-start xl:items-start">
                <Link to="/headphones/3">
                  <button className=" text-[15px] loading-[17px]  bg-orange-500 p-[10px] h-[48px] w-[160px] text-white hover:bg-orange-200">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Card />
      </main>
    </Layout>
  );
}

export default Headphones;
