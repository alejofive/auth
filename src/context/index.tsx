import { createContext, useState } from "react";

type AuthType = {
  auth: string;
  setAuth: React.Dispatch<React.SetStateAction<string>>;
};
export const AuthContext = createContext<AuthType | null>(null);

export const Provider = ({ children }: { children: any }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("token") || ("" as string)
  );

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
