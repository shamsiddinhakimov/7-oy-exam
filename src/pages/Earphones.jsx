import Layout from "../layout/layout";
import ez from "../assets/ez.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
function Earphones() {
  return (
    <Layout>
      <div className="mr-auto ml-auto bg-[#000000] flex justify-between items-center flex-col py-[60px] mb-[60px]">
        <div className="w-full max-w-[1200px]  flex justify-center  text-white p-5">
          <h2 className="font-bold text-[40px] loading-[44px] ">Earphones</h2>
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
              <img src={ez} alt="" />
            </div>
            <div className="flex flex-col ">
              <h2 className=" mb-[10px] text-center w-full xl:text-left text-[#D87D4A] text-[14px] loading-[19px] xl:w-[199px] h-[19px] sm:mb-[0px]">
                NEW PRODUCT
              </h2>
              <h2 className="  mb-[40px] text-center xl:text-left font-bold text-[40px] loading-[44px] xl:w-[445px] h-[80px] sm:mb-[10px]">
                YX1 WIRELESS EARPHONES
              </h2>
              <p className=" text-center ml-5 sm:ml-[0px] mt-1 xl:text-left xl:mt-10 max-w-[445px] sm:h-[100px] text-[15px] loading-[25px] mb-3">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <div className="flex justify-center items-center xl:justify-start xl:items-start">
                <Link to="/earphones/1">
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

export default Earphones;
