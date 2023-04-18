import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "@/page/dashboard";
import Login from "@/page/login";
import NotFound from "@/page/not-found";

export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/dashboard"></Navigate>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace={true}></Navigate>,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes
};

export default Router;
