import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Input from "../../assets/input-group.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-gray-100">
          <div>
            <div className="container mx-auto flex items-center justify-between pl-36 pr-36 pt-11 pb-11">
              <div className="text-2xl font-bold text-slate-900">Bandage</div>
              <div className="flex items-center gap-3 text-base">
                <GrInstagram color="sky" fontSize={20} />
                <FaFacebook color="sky" fontSize={20} />
                <FaTwitter color="sky" fontSize={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-9 justify-center py-20">
          <div>
            <div className="text-base font-bold text-slate-800 pb-5">
              Company Info
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-stone-600 text-sm font-normal">About Us</p>
              <p className="text-stone-600 text-sm font-normal">Carrier</p>
              <p className="text-stone-600 text-sm font-normal">
                We are hiring
              </p>
              <p className="text-stone-600 text-sm font-normal">Blog</p>
            </div>
          </div>
          <div>
            <div className="text-base font-bold text-slate-800 pb-5">Legal</div>
            <div className="flex flex-col gap-2.5">
              <p className="text-stone-600 text-sm font-normal">About Us</p>
              <p className="text-stone-600 text-sm font-normal">Carrier</p>
              <p className="text-stone-600 text-sm font-normal">
                We are hiring
              </p>
              <p className="text-stone-600 text-sm font-normal">Blog</p>
            </div>
          </div>
          <div>
            <div className="text-base font-bold text-slate-800 pb-5">
              Features
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-stone-600 text-sm font-normal">
                Business Marketing
              </p>
              <p className="text-stone-600 text-sm font-normal">
                User Analytic
              </p>
              <p className="text-stone-600 text-sm font-normal">Live Chat</p>
              <p className="text-stone-600 text-sm font-normal">
                Unlimited Support
              </p>
            </div>
          </div>
          <div>
            <div className="text-base font-bold text-slate-800 pb-5">
              Resources
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-stone-600 text-sm font-normal">
                IOS & Android
              </p>
              <p className="text-stone-600 text-sm font-normal">Watch a Demo</p>
              <p className="text-stone-600 text-sm font-normal">Customers</p>
              <p className="text-stone-600 text-sm font-normal">API</p>
            </div>
          </div>
          <div>
            <div className="text-base font-bold text-slate-800 pb-5">
              Get In Touch
            </div>
            <img src={Input} alt="" />
            <p className="text-stone-600 text-sm font-normal pt-1">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="text-sm py-6 text-center text-stone-600">
            Made With Love By Finland All Right Reserved{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
