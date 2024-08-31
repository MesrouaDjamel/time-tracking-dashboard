"use client"

import { useState } from "react";

type TPropsPeriod = {
  getPeriod: (period: string) => void
}

const Periods = ({getPeriod}: TPropsPeriod) => {
    const [period,setPeriod] = useState("Weekly")
    const [isActiveWeekly, setIsActiveWeekly] = useState(true);
    const [isActiveDaily, setIsActiveDaily] = useState(false);
    const [isActiveMonthly, setIsActiveMonthly] = useState(false);
    
    // console.log(period);
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
        getPeriod(period)
    }
  return (
   
        <div className="flex justify-between p-7 md:flex-col xl:gap-4">
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
   
  );
}

export default Periods