"use client";
import { useState } from "react";
import { IStatistic } from "../../type/type";
import Activities from "./Activities";
import UserInfo from "./UserInfo";

const ListActivities = ({stats}: {stats: IStatistic[]}) => {
  // console.log(stats);
  const  [period, setPeriod] = useState("Weekly");
  const getPeriod = (period: string) => {
    console.log(period);
    setPeriod(period);
  };
  console.log(stats);
   
  return (
    <div className=" max-w-[1110px] xl:min-h-[520px] lg:mx-4 lg:flex gap-7  ">
      <UserInfo  getPeriod={getPeriod} />
      <div className="grid grid-cols-1 gap-7  xl:grid-cols-3 lg:grid-cols-2 lg:gap-4">
        {stats.map((stat) => (
          <Activities key={stat.title} stat={stat} period={period} />
        ))}
      </div>
    </div>
  );
}

export default ListActivities