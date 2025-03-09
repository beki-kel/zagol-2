"use client";

import React from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { useThemeMode } from "@/utils/useThemeMode";
import { usePathname } from "next/navigation";
export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = "" }) => {
  const { _toogleDarkMode, isDarkMode, toDark, toLight } = useThemeMode();
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <button
      onClick={_toogleDarkMode}
      className={`self-center text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 ${
        isRoot
          ? "hover:bg-[#2995D3] hover:bg-opacity-80  w-12 h-12"
          : "hover:bg-neutral-100 dark:hover:bg-neutral-700 w-7 h-7"
      } focus:outline-none flex items-center justify-center ${className}`}
    >
      <span className="sr-only">Enable dark mode</span>
      {isDarkMode ? (
        <MoonIcon
          className={` ${
            isRoot
              ? "text-white w-7 h-7"
              : "text-neutral-700 dark:text-neutral-100  w-5 h-5"
          }`}
          aria-hidden="true"
        />
      ) : (
        <SunIcon
          className={` ${
            isRoot
              ? "text-white w-7 h-7"
              : "text-neutral-700 dark:text-neutral-100 w-5 h-5"
          }`}
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default SwitchDarkMode;
