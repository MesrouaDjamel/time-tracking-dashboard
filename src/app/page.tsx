import TimeTrackingDashboard from "@/components/TimeTrackingDashboard";
import { IStatistic, IUser } from "../../type/type";

export default async function Home() {
  
  const StatResponse = await fetch("https://raw.githubusercontent.com/MesrouaDjamel/json-server-data/main/data.json",{cache: "no-store"});
  // const StatResponse = await fetch("http://localhost:8000/stats");
  // const StatResponse = await fetch("/data.json");
  const stats = await StatResponse.json() as IStatistic[];

  console.log(stats);
  // console.log(title);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-Verydarkblue">
      {/* {stats.length === 0 ? <TimeTrackingDashboard stats={stats} /> : <div>loading...</div>} */}
      <TimeTrackingDashboard stats={stats} />
    </main>
  );
}
