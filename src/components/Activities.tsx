"use client";
import Image from "next/image";
import { IStatistic } from "../../type/type";
const Activities = ({ stat, period }: { stat: IStatistic; period: string }) => {
  const { daily } = stat.timeframes;
  const { weekly } = stat.timeframes;
  2;
  const { monthly } = stat.timeframes;
  const title = stat.title;
  // console.log(period);

  return (
    <div className=" w-[330px] lg:w-[300px] xl:w-[255px]  xl:h-[245px]  ">
      <div
        className={` relative h-16 rounded-lg flex flex-col
                        ${title === "Work" ? "bg-LightRed" : null}
                        ${title === "Play" ? "bg-Softblue" : null}
                        ${title === "Study" ? "bg-Lightred" : null}
                        ${title === "Exercise" ? "bg-Limegreen" : null}
                        ${title === "Social" ? "bg-Violet" : null}
                        ${title === "Self Care" ? "bg-Softorange" : null}
                      `}
      >
        <Image
          src={stat.image}
          alt=""
          width={80}
          height={80}
          className="absolute right-4 top-0 "
        />
      </div>

      <div className="bg-Darkblue hover:bg-DarkblueHover cursor-pointer p-4 -translate-y-4 lg:h-[105px] xl:min-h-[200px] rounded-b-2xl   ">
        <div className="flex items-center justify-between mb-4 xl:mb-4 ">
          <h1 className="text-white text-xl">{stat.title}</h1>
          <svg
            width="21"
            height="5"
            viewBox="0 0 21 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_218_316)">
              lg:gap-2
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 0C3.16304 0 3.79893 0.263392 4.26777 0.732233C4.73661 1.20107 5 1.83696 5 2.5C5 3.16304 4.73661 3.79893 4.26777 4.26777C3.79893 4.73661 3.16304 5 2.5 5C1.83696 5 1.20107 4.73661 0.732233 4.26777C0.263392 3.79893 0 3.16304 0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0ZM10.5 0C11.163 0 11.7989 0.263392 12.2678 0.732233C12.7366 1.20107 13 1.83696 13 2.5C13 3.16304 12.7366 3.79893 12.2678 4.26777C11.7989 4.73661 11.163 5 10.5 5C9.83696 5 9.20107 4.73661 8.73223 4.26777C8.26339 3.79893 8 3.16304 8 2.5C8 1.83696 8.26339 1.20107 8.73223 0.732233C9.20107 0.263392 9.83696 0 10.5 0ZM18.5 0C19.163 0 19.7989 0.263392 20.2678 0.732233C20.7366 1.20107 21 1.83696 21 2.5C21 3.16304 20.7366 3.79893 20.2678 4.26777C19.7989 4.73661 19.163 5 18.5 5C17.837 5 17.2011 4.73661 16.7322 4.26777C16.2634 3.79893 16 3.16304 16 2.5C16 1.83696 16.2634 1.20107 16.7322 0.732233C17.2011 0.263392 17.837 0 18.5 0Z"
                fill="#BBC0FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_218_316">
                <rect width="21" height="5" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex items-center justify-between  gap-7  xl:flex-col  xl:items-start  ">
          {period === "Daily" && (
            <span className="text-white text-4xl xl:text-5xl">
              {daily.current}hrs
            </span>
          )}

          {period === "Weekly" && (
            <span className="text-white text-4xl xl:text-5xl">
              {weekly.current}hrs
            </span>
          )}

          {period === "Monthly" && (
            <span className="text-white text-4xl xl:text-5xl">
              {monthly.current}hrs
            </span>
          )}

          {period === "Daily" && (
            <span className="text-Desaturatedblue  text-sm">
              Last {period.toLowerCase()} -{daily.previous}hrs
            </span>
          )}

          {period === "Weekly" && (
            <span className="text-Desaturatedblue  text-sm">
              Last {period.toLowerCase()} -{weekly.previous}hrs
            </span>
          )}

          {period === "Monthly" && (
            <span className="text-Desaturatedblue text-sm">
              Last {period.toLowerCase()} -{monthly.previous}hrs
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activities;
