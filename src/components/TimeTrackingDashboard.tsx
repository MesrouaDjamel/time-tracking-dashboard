import { IStatistic } from "../../type/type";
import ListActivities from "./ListActivities";

const TimeTrackingDashboard = ({ stats }: { stats: IStatistic[] }) => {
  return (
    <div className="">
      <ListActivities stats={stats} />
    </div>
  );
};
export default TimeTrackingDashboard;
