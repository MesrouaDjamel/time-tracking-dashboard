export interface IUser {
  image: string;
  name: string;
}
export interface IStatistic {
  image: string;
  title: string;
  user: IUser;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}
