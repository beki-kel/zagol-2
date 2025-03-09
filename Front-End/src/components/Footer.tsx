"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import ZagolBlueLogo from "@/images/zagol.png";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Explore",
    menus: [
      { href: "#aboutUs", label: "About Us" },
      { href: "#FeaturedPackages", label: "Packages" },
      { href: "/contact", label: "Contact Us" },
    ],
  },

  {
    id: "2",
    title: "Find us on",
    menus: [
      { href: "#", label: "Youtube" },
      { href: "#", label: "Facebook" },
      { href: "#", label: "Instagram" },
    ],
  },
  {
    id: "4",
    title: "Our Policies",
    menus: [
      { href: "#", label: "Refund Policy" },
      { href: "#", label: "Code of Conduct" },
      { href: "#", label: "Privacy and security" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-[#2995D3] dark:text-neutral-200 text-center">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4 text-center">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="hidden md:block nc-Footer relative py-10 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container hidden md:grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10  ">
          <div className="flex flex-col items-center justify-center">
            <Logo img={ZagolBlueLogo} />
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
