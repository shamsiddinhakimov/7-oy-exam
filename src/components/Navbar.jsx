import { Link } from "react-router-dom";
import Logo from "../assets/audiophile 2.svg";
import Magaz from "../assets/magaz.svg";
function Navbar() {
  return (
    <div className="mr-auto ml-auto bg-[#000000] flex justify-between items-center flex-col">
      <div className="w-full max-w-[1200px] h-[80px] flex justify-between items-center bg-inherit text-white p-8">
        <div className="flex gap-11 items-center">
          <div className="dropdown sm:hidden">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-600"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/speakers">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </div>
          <div>
            <img className="cursor-pointer" src={Logo} alt="" />
          </div>
        </div>
        <div className="sm:flex gap-8 hidden mx-4 sm:mx-0">
          <Link to="/">
            <h2 className=" text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300">
              HOME
            </h2>
          </Link>
          <Link to="/headphones">
            <h2 className=" text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300">
              HEADPHONES
            </h2>
          </Link>
          <Link to="/speakers">
            <h2 className=" text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300 ">
              SPEAKERS
            </h2>
          </Link>
          <Link to="/earphones">
            <h2 className=" text-[13px] leading-[25px] cursor-pointer hover:text-orange-500 duration-300">
              EARPHONES
            </h2>
          </Link>
        </div>
        <div>
          <img className=" cursor-pointer" src={Magaz} alt="" />
        </div>
      </div>
      <hr className="border border-white opacity-25 h-[1px] w-full max-w-[1160px]" />
    </div>
  );
}

export default Navbar;
