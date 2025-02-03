import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="bg-slate-800 p-5">
        <div className="container mx-auto flex items-center gap-5 justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <IoCallOutline color="white" fontSize={22} />
              <p className="text-white text-base">(225) 555-0118</p>
            </div>
            <div className="flex gap-2 items-center">
              <CgMail color="white" fontSize={28} />
              <p className="text-white text-base">
                michelle.rivera@example.com
              </p>
            </div>
          </div>
          <div className="text-base text-white">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex items-center gap-3 text-base">
            <p className="text-white">Follow Us :</p>
            <GrInstagram color="white" fontSize={20} />
            <GrYoutube color="white" fontSize={20} />
            <FaFacebook color="white" fontSize={20} />
            <FaTwitter color="white" fontSize={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
