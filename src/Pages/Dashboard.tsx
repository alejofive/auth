import { useEffect } from "react";
import { dashboardService } from "../services/dashboard";

const Dashboard = () => {
  const getData = async () => {
    const data = await dashboardService.get();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="grid grid-cols-10 ">
      <h1>Dashboard</h1>
    </section>
  );
};

export default Dashboard;
