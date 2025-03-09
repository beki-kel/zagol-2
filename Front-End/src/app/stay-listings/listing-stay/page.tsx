"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import commingSoon from "@/images/11669340_20945919.jpg";
import commingSoonDark from "@/images/freepik__background__66126.jpeg";
export interface ListingStayPageProps {}

const ListingStayPage: FC<ListingStayPageProps> = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container relative flex flex-col justify-center items-center py-5">
      <div className="flex flex-coljustify-center items-center  text-center">
        <h1 className="text-3xl font-bold pb-12 text-[#2995D3]">
          This Page is Under Construction. comming soon
        </h1>
      </div>
      <div className="container flex justify-center items-start relative gap-10 ">
        <div className="h-[75vh] rounded-2xl pb-28 mt-4">
          <Image
            src={commingSoon}
            alt="comming soon"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl w-[80vw] dark:hidden"
          />
          <Image
            src={commingSoonDark}
            alt="comming soon"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl w-[80vw] hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingStayPage;
