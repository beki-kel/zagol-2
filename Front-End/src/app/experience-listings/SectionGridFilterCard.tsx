import React, { FC, useState } from "react";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType, StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import Heading2 from "@/shared/Heading2";
import ExperiencesCard from "@/components/ExperiencesCard";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const ITEMS_PER_PAGE = 8;

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_EXPERIENCES_LISTINGS,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={`lg:pt-4 nc-SectionGridFilterCard ${className}`}>
      <Heading2 heading="Our Packages" />
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {paginatedData.map((stay) => (
          <ExperiencesCard key={stay.id} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
