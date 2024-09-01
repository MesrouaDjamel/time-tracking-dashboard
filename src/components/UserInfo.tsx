"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IUser } from "../../type/type";

const user = {
  image: "/image-jeremy.png",
  name : "Jeremy Robson",
}
const UserInfo = ({getPeriod }: {getPeriod: (period: string) => void }) => {
   const [period, setPeriod] = useState("Weekly");
   const [isActiveWeekly, setIsActiveWeekly] = useState(true);
   const [isActiveDaily, setIsActiveDaily] = useState(false);
   const [isActiveMonthly, setIsActiveMonthly] = useState(false);

   const handleClick = (period: string) => {
     setPeriod(period);
     if (period === "Daily") {
       setIsActiveDaily(true);
       setIsActiveWeekly(false);
       setIsActiveMonthly(false);
     }
     if (period === "Weekly") {
       setIsActiveDaily(false);
       setIsActiveWeekly(true);
       setIsActiveMonthly(false);
     }
     if (period === "Monthly") {
       setIsActiveDaily(false);
       setIsActiveWeekly(false);
       setIsActiveMonthly(true);
     }
     getPeriod(period);
   };
  
  return (
    <div className="bg-Darkblue mb-7 lg:mb-0 w-[330px] xl:max-w-[255px] lg:h-[520px] rounded-lg ">
      <div
        className=" rounded-lg p-7 flex items-center gap-4 bg-Blue md:flex-col lg:items-start">
        <Image
          src={user.image}
          alt="image"
          width={85}
          height={85}
          className="rounded-full xl:pb-3 "
        />
        <div className="flex flex-col lg:gap-4">
          <span className="text-Paleblue font">Report for</span>
          <span className="text-white font-light text-[30px]  lg:text-5xl">
            {user.name}
          </span>
        </div>
      </div>

      <div className="flex justify-between p-7 md:flex-col lg:text-2xl  lg:gap-6">
        <span
          onClick={() => handleClick("Daily")}
          className={`${
            isActiveDaily ? "text-white" : "text-Desaturatedblue"
          } cursor-pointer`}
        >
          Daily
        </span>
        <span
          onClick={() => handleClick("Weekly")}
          className={`${
            isActiveWeekly ? "text-white" : "text-Desaturatedblue"
          } cursor-pointer`}
        >
          Weekly
        </span>
        <span
          onClick={() => handleClick("Monthly")}
          className={`${
            isActiveMonthly ? "text-white" : "text-Desaturatedblue"
          } cursor-pointer`}
        >
          Monthly
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
