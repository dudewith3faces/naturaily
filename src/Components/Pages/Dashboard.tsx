import { DashboardService } from '../services';
import { Header } from '../common';
export const Dashboard = () => {
  DashboardService();
  return (
    <>
      <Header />
      <div>Dashboard</div>
    </>
  );
};
