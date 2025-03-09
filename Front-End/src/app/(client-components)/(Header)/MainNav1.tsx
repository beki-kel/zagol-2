import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { usePathname } from "next/navigation";
import ZagolBlueLogo from "@/images/zagol.png";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div
        className={`xl:px-14 md:pr-5 md:pl-5 relative flex justify-between items-center ${
          isRoot ? "h-20" : "h-10 xl:py-1"
        }`}
      >
        <div className="hidden md:flex justify-center lg:justify-start lg:flex-1  lg:space-x-10">
          {isRoot ? (
            <Logo className="lg:w-24 w-32  lg:self-center" />
          ) : (
            <Logo
              className="w-8 h-8 lg:self-center"
              img={ZagolBlueLogo}
              imgLight={ZagolBlueLogo}
            />
          )}

          <div
            className={`hidden w-full lg:flex justify-start ${
              isRoot ? "justify-start" : "justify-center"
            }`}
          >
            <Navigation />
          </div>
        </div>

        <div className="flex justify-between items-center lg:hidden flex-[3] w-full lg:px-3 ">
          <div className="self-center w-5/6 px-2 md:px-0">
            <HeroSearchForm2MobileFactory />
          </div>
          <div className="flex justify-center items-center md:pl-6 md:pr-0 text-sm text-white hover:border-b-2 hover:border-white hover:transition-all w-1/6 xl:px-0 px-1 mr-2">
            <GlobeAltIcon className="h-4 w-4 " />
            <a
              href="/"
              className={`pl-2 
              ${isRoot ? "" : "text-neutral-700 dark:text-neutral-100"}`}
            >
              EN
            </a>
          </div>
        </div>

        <div
          className={`hidden lg:flex justify-between items-center text-sm text-white hover:border-b-2 hover:transition-all ${
            isRoot ? "hover:border-white" : "hover:border-[#2995D3]"
          } `}
        >
          <GlobeAltIcon
            className={`h-4 w-4  ${
              isRoot ? "" : "text-neutral-700 dark:text-neutral-100"
            }`}
          />
          <a
            href="/"
            className={`pl-2 ${
              isRoot ? "" : "text-neutral-700 dark:text-neutral-100"
            }`}
          >
            EN
          </a>
        </div>

        <div className="hidden lg:flex flex-shrink-0 justify-center flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100 pl-6">
          <div className="hidden xl:flex space-x-5">
            <SwitchDarkMode />
            <div className="px-1" />
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
          </div>
        </div>

        <div className="hidden xl:block border-l px-4 my-6">
          <a
            href="/home/home-2"
            className={`flex justify-between items-center text-sm bg-white  px-2 py-1 rounded-3xl  dark:hover:bg-opacity-60 hover:border-white hover:transition-all
              ${
                isRoot
                  ? "hover:bg-opacity-85"
                  : "hover:bg-opacity-60 hover:translate-all shadow-md border"
              }`}
          >
            <ArrowDownTrayIcon className="h-4 w-4 mr-2 text-[#2995D3]" />
            <p className=" text-xs font-extralight text-neutral-900 ">
              Download Our App
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
