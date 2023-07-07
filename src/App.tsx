import { useContext } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../src/context";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Players from "./Pages/Players";

function App() {
  const authContext = useContext(AuthContext);
  const auth = authContext?.auth;
  const logout = () => {
    authContext?.changeAuth({
      ...authContext.auth,
      token: "",
    });
  };
  return (
    <BrowserRouter>
      {!auth?.token ? (
        <>
          <Routes>
            <Route path="/" Component={() => <Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      ) : (
        <>
          <header className="bg-gray-400 p-6 flex items-center justify-between">
            <ul className="flex gap-2">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/players">players</Link>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              <h3 className="px-4">{auth.user.name}</h3>
              <button type="button" onClick={() => logout()}>
                Salir
              </button>
            </div>
          </header>
          <Routes>
            <Route path="/dashboard" Component={() => <Dashboard />} />
            <Route path="/players" Component={() => <Players />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
export default App;
