import React from "react";

import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import girl from "../../../assets/Girl-top.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto pt-6 pb-5  flex items-center justify-around ">
        <h1 className="text-2xl text-slate-800 font-bold">Bandage</h1>
        <div className="flex items-center gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/shop"}>Shop</Link>
        </div>
        <div className="flex items-center gap-4 pl-9">
          <FaRegUser color="blue" fontSize={18} />
          <Link to={"/login"} className="text-base text-blue-600">
            Login
          </Link>
          {" / "}
          <Link to={"/register"} className="text-base text-blue-600">
            Register
          </Link>
          <IoSearch color="blue" fontSize={18} />
          <SlBasket color="blue" fontSize={18} />
          <IoIosHeartEmpty color="blue" fontSize={18} />
        </div>
      </div>
      <div className="mb-20 ">
        <div
          className="min-h-screen"
          style={{
            background: `url(${girl}) no-repeat center/cover`,
          }}
        >
          <div className="container mx-auto">
            <div className="pt-80 pb-56 pl-48 flex flex-col gap-9">
              <p className="text-base text-white font-bold">SUMMER 2020</p>
              <h3 className="text-6xl text-white font-bold">NEW COLLECTION</h3>
              <p className="text-xl text-white font-normal">
                We know how large objects will act, <br /> but things on a small
                scale.
              </p>
              <div>
                <button className="bg-emerald-400 px-10 py-4 text-white text-2xl rounded-md font-normal cursor-pointer">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
