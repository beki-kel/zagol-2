"use client";
import React, { FC, useEffect, useState } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import ListingCarLoadingSkeleton from "@/app/stay-listings/listingStayAndCarLoadingSkeleton";

export interface ListingCarPageProps {}

const ListingCarPage: FC<ListingCarPageProps> = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showContent ? (
        <div className="container ">
          <SectionGridFilterCard className="pb-24 lg:pb-28" />
        </div>
      ) : (
        <div className="container flex flex-col items-center pb-20">
          <ListingCarLoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default ListingCarPage;
