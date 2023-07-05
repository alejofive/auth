const url = "https://tn3uu1az7b.execute-api.us-east-1.amazonaws.com/Prod";

class AuthService {
  login = async (data: { email: string; password: string }) => {
    try {
      const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al cargar los datos");
      }
      const json = await res.json();
      localStorage.setItem("token", json.data.token);

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

export const authService = new AuthService();
