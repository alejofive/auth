import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

const PublicRoutes = () => {
  const routes = useRoutes([{ path: "/", element: <Login /> }]);
  return routes;
};

const PrivateRoutes = () => {
  const routes = useRoutes([{ path: "/dashboard", element: <Dashboard /> }]);
  return routes;
};

function App() {
  const auth = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <div className="bg-gradient m-auto flex justify-center items-center">
        {!auth && <PublicRoutes  />}
        {auth && <PrivateRoutes />}
      </div>
    </BrowserRouter>
  );
}

export default App;
