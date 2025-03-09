"use client";

import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import CommentListing from "@/components/CommentListing";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import StartRating from "@/components/StartRating";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonCircle from "@/shared/ButtonCircle";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose";
import Input from "@/shared/Input";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Amenities_demos, PHOTOS } from "./constant";
import StayDatesRangeInput from "./StayDatesRangeInput";
import GuestsInput from "./GuestsInput";
import SectionDateRange from "../SectionDateRange";
import { Route } from "next";

export interface ListingStayDetailPageProps {}

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({}) => {
  //

  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);

  const thisPathname = usePathname();
  const router = useRouter();

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge name="Wooden house" />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Beach House in Collingwood
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1"> Tokyo, Jappan</span>
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              6 <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              6 <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              3 <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              2 <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Amenities </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {` About the property's amenities and services`}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {Amenities_demos.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i className={`text-3xl las ${item.icon}`}></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>

        {/* ----- */}
        <div className="w-14 border-b border-neutral-200"></div>
        <div>
          <ButtonSecondary onClick={openModalAmenities}>
            View more 20 amenities
          </ButtonSecondary>
        </div>
        {renderMotalAmenities()}
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {Amenities_demos.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8"
                      >
                        <i
                          className={`text-4xl text-neutral-6000 las ${item.icon}`}
                        ></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection4 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Room Rates </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}
        <div className="flow-root">
          <div className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Monday - Thursday</span>
              <span>$199</span>
            </div>
            <div className="p-4  flex justify-between items-center space-x-4 rounded-lg">
              <span>Monday - Thursday</span>
              <span>$199</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Friday - Sunday</span>
              <span>$219</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Rent by month</span>
              <span>-8.34 %</span>
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 flex justify-between items-center space-x-4 rounded-lg">
              <span>Minimum number of nights</span>
              <span>1 night</span>
            </div>
            <div className="p-4 flex justify-between items-center space-x-4 rounded-lg">
              <span>Max number of nights</span>
              <span>90 nights</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold text-[#2995D3] ">
            $119
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /night
            </span>
          </span>
          <StartRating />
        </div>

        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <StayDatesRangeInput className="flex-1 z-[11]" />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInput className="flex-1" />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$119 x 3 night</span>
            <span>$357</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-[#2995D3] ">$199</span>
          </div>
        </div>

        {/* SUBMIT */}
        <ButtonPrimary href={"/"}>Reserve</ButtonPrimary>
      </div>
    );
  };

  return (
    <div className="nc-ListingStayDetailPage lg:pb-20">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ""}
                  alt=""
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}

          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection3()}
          {renderSection4()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div>
      </main>
    </div>
  );
};

export default ListingStayDetailPage;
