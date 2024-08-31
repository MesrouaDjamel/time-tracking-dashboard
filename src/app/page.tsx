import TimeTrackingDashboard from "@/components/TimeTrackingDashboard";
import { IStatistic } from "../../type/type";

export default async function Home() {
  
  const StatResponse = await fetch("http://localhost:8000/stats");
  const stats = (await StatResponse.json()) as IStatistic[];

  // console.log(stats);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-Verydarkblue">
      <TimeTrackingDashboard stats={stats} />
    </main>
  );
}
