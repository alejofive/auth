const url = "https://tn3uu1az7b.execute-api.us-east-1.amazonaws.com/Prod";
class DashboardService {
  get = async () => {
    try {
      const res = await fetch(
        `${url}/dashboard?start_date=2023-01-01&end_date=2023-12-31`,
        {
          method: "get",
          headers: {
            "content-type": "application/json",
            Authorization:
              JSON.parse(localStorage.getItem("auth") || "").token || "",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Error al cargar los datos");
      }
      const json = await res.json();

      return {
        info: json,
        error: null,
      };
    } catch (error) {
      return {
        info: null,
        error: error,
      };
    }
  };
}

export const dashboardService = new DashboardService();
