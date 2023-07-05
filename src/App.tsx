import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, Provider } from "../src/context";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

function App() {
  const authContext = useContext(AuthContext);
  const auth = authContext?.auth;
  console.log(auth);

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {!auth ? (
            <>
              <Route path="/" Component={() => <Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" Component={() => <Dashboard />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
