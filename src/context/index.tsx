import { createContext, useState } from "react";

type AuthType = {
  token: string;
  user: {
    id: string;
    name: string;
  };
};

type ContextAuthType = {
  auth: AuthType;
  changeAuth: (params: AuthType) => void;
};
export const AuthContext = createContext<ContextAuthType | null>(null);

export const Provider = ({ children }: { children: any }) => {
  const localAuthData = JSON.parse(localStorage.getItem("auth") || "");
  console.log(localAuthData);

  const [auth, setAuth] = useState(
    localAuthData
      ? localAuthData
      : {
          token: "",
          user: {
            id: "",
            name: "",
          },
        }
  );
  const changeAuth = (params: AuthType) => [setAuth(params)];

  return (
    <AuthContext.Provider
      value={{
        auth,
        changeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
