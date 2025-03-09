"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface OnTopDateSliderProps {
  maxDays: number;
  daysToDisplay: number;
  onDateChange: (date: string) => void;
}

const OnTopDateSlider: React.FC<OnTopDateSliderProps> = ({
  maxDays,
  daysToDisplay,
  onDateChange,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateDates = (start: Date, days: number) => {
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const handleClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    const selectedDate = dates[index].toISOString().split("T")[0];
    onDateChange(selectedDate);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + daysToDisplay);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - daysToDisplay, 0));
  };

  const dates = generateDates(startDate, maxDays);
  const visibleDates = dates.slice(currentIndex, currentIndex + daysToDisplay);

  return (
    <div className="date-slider flex space-x-2">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="mx-2"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {visibleDates.map((date, index) => (
        <div
          key={index}
          className={`date-item flex flex-col items-center 
                        justify-center px-2 py-1 border border-[#158dd2] rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105 ${
                          selectedIndex === index + currentIndex
                            ? "bg-neutral-200 dark:bg-neutral-700 scale-110"
                            : ""
                        }`}
          onClick={() => handleClick(index + currentIndex)}
        >
          <p className="text-sm text-neutral-700 dark:text-white font-semibold">
            {date.getDate()}
          </p>
          <p className="font-thin text-xs text-neutral-700 dark:text-white">
            {date.toLocaleDateString("en-US", { month: "long" })}
          </p>
        </div>
      ))}
      <button
        onClick={handleNext}
        disabled={currentIndex + daysToDisplay >= dates.length}
        className="mx-2"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default OnTopDateSlider;
