import React from "react";
import Boy from "../../assets/boy-cap.png";
import BoyKids from "../../assets/boy-kids.png";
import GirlAcc from "../../assets/girl-acc.png";
import GirlJens from "../../assets/girl-jens.png";
import Products from "../products/Products";
import GirlMan from "../../assets/girl-man.png";
import Row from "../../assets/row.png";
import Car from "../../assets/car.png";
import Sky from "../../assets/sky.png";

const Main = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto m-0">
          <div className="pb-20">
            <div className="flex flex-col gap-2.5 pb-12">
              <h3 className="text-center text-slate-800 text-2xl font-bold pt-6">
                EDITOR’S PICK
              </h3>
              <p className="text-center text-sm font-normal text-stone-400">
                Problems trying to resolve the conflict between{" "}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex gap-7 ">
                <img src={Boy} alt="" />
                <img src={GirlJens} alt="" />
                <div className="flex flex-col gap-3.5">
                  <img src={GirlAcc} alt="" />
                  <img src={BoyKids} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <div className="container mx-auto">
        <div className="flex items-center gap-8">
          <img src={GirlMan} alt="" />
          <div className="flex flex-col gap-8">
            <p className=" text-stone-300 text-base font-bold">SUMMER 2020</p>
            <div className="text-4xl font-bold text-slate-800">
              Part of the Neural <br />
              Universe
            </div>
            <p className="text-xl font-normal text-stone-400">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <div className="flex gap-2.5">
              <button className="bg-emerald-400 px-10 py-4 text-white text-2xl rounded-md font-normal cursor-pointer hover:bg-inherit border-2 border-solid hover:text-emerald-400 hover:border-emerald-400  transition">
                BUY NOW
              </button>
              <button className="bg-inherit px-10 py-4 text-emerald-400 border-2 border-emerald-500 border-solid text-2xl rounded-md font-normal cursor-pointer hover:bg-emerald-400 hover:text-white hover:border-inherit transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-28">
        <div className="flex flex-col items-center gap-2.5 pb-20">
          <p className="text-sm text-sky-400">Practice Advice</p>
          <div className="text-slate-900 text-4xl font-bold">
            Featured Posts
          </div>
          <p className="text-slate-400 text-sm text-center">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mb-28">
          <div>
            <img src={Row} alt="" />
            <div className="pt-6 pl-6">
              <div className="flex items-center gap-3.5 ">
                <p className="text-slate-400">Google</p>
                <p className="text-slate-400">Trending</p>
                <p className="text-slate-400">New</p>
              </div>
              <div className="pt-2.5 flex flex-col gap-2.5">
                <div className="text-xl font-normal text-slate-900">
                  Loudest à la Madison #1 <br />
                  (L'integral)
                </div>
                <p className="text-stone-500 ">
                  We focus on ergonomics and meeting <br />
                  you where you work. It's only a <br />
                  keystroke away.
                </p>
                <div className="flex items-center gap-28 text-stone-500 ">
                  <p>22 April 2021</p>
                  <p>10 comments</p>
                </div>
                <div className="text-stone-600 text-lg font-normal">
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Car} alt="" />
            <div className="pt-6 pl-6">
              <div className="flex items-center gap-3.5 ">
                <p className="text-slate-400">Google</p>
                <p className="text-slate-400">Trending</p>
                <p className="text-slate-400">New</p>
              </div>
              <div className="pt-2.5 flex flex-col gap-2.5">
                <div className="text-xl font-normal text-slate-900">
                  Loudest à la Madison #1 <br />
                  (L'integral)
                </div>
                <p className="text-stone-500 ">
                  We focus on ergonomics and meeting <br />
                  you where you work. It's only a <br />
                  keystroke away.
                </p>
                <div className="flex items-center gap-28 text-stone-500 ">
                  <p>22 April 2021</p>
                  <p>10 comments</p>
                </div>
                <div className="text-stone-600 text-lg font-normal">
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Sky} alt="" />
            <div className="pt-6 pl-6">
              <div className="flex items-center gap-3.5 ">
                <p className="text-slate-400">Google</p>
                <p className="text-slate-400">Trending</p>
                <p className="text-slate-400">New</p>
              </div>
              <div className="pt-2.5 flex flex-col gap-2.5">
                <div className="text-xl font-normal text-slate-900">
                  Loudest à la Madison #1 <br />
                  (L'integral)
                </div>
                <p className="text-stone-500 ">
                  We focus on ergonomics and meeting <br />
                  you where you work. It's only a <br />
                  keystroke away.
                </p>
                <div className="flex items-center gap-28 text-stone-500 ">
                  <p>22 April 2021</p>
                  <p>10 comments</p>
                </div>
                <div className="text-stone-600 text-lg font-normal">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
