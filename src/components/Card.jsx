import Calonka from "../assets/image-removebg-preview(41).svg";
import Calonka1 from "../assets/image-removebg-preview(38).svg";
import Calonka2 from "../assets/Group 5.svg";
import { Link } from "react-router-dom";
import path from "../assets/Path 2.svg";

function Card() {
  return (
    <>
      <div className="mx-auto w-full  max-w-[1040px] h-[529px] mb-[100px] mt-[100px] flex flex-col justify-center items-center xl:flex-row xl:items-start   xl:justify-start  py-[80px] gap-5">
        <div className="w-[350px] h-[284px] flex flex-col justify-center items-center bg">
          <img src={Calonka} alt="" />
          <h2 className=" font-semibold text-[18px] loading-[25px]">
            HEADPHONES
          </h2>
          <Link to="/headphones">
            <h2 className="text-[13px] loading-[17px] flex items-center gap-1 hover:text-orange-500">
              Shop{" "}
              <span>
                <img src={path} alt="" />
              </span>
            </h2>
          </Link>
        </div>
        <div className="w-[350px] h-[284px] flex flex-col justify-center items-center bg">
          <img src={Calonka1} alt="" />
          <h2 className=" font-semibold text-[18px] loading-[25px]">
            HEADPHONES
          </h2>
          <Link to="/speakers">
            <h2 className="text-[13px] loading-[17px] flex items-center gap-1 hover:text-orange-500">
              Shop{" "}
              <span>
                <img src={path} alt="" />
              </span>
            </h2>
          </Link>
        </div>
        <div className="w-[350px] h-[284px] flex flex-col justify-center items-center bg">
          <img src={Calonka2} alt="" />
          <h2 className=" font-semibold text-[18px] loading-[25px]">
            HEADPHONES
          </h2>
          <Link to="/earphones">
            <h2 className="text-[13px] loading-[17px] flex items-center gap-1 hover:text-orange-500">
              Shop{" "}
              <span>
                <img src={path} alt="" />
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
