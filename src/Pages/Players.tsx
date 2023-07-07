import { useEffect } from "react";
import { dashboardService } from "../services/dashboard";

const Players = () => {
  const getData = async () => {
    const data = await dashboardService.get();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="grid grid-cols-10 ">
      <h1>Players</h1>
    </section>
  );
};

export default Players;
