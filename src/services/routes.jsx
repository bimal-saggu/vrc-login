import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomeLogin from "../pages/HomeLogin";
import SignUp from "../components/SignUp";
import AdminDash from "../pages/AdminDash";
import SalesDash from "../pages/SalesDash";
import OnBoarding from "../components/sales/OnBoarding";
import History from "../components/sales/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeLogin /> },
      { path: "signup", element: <SignUp /> },
      { path: "/admin/dashboard", element:  <AdminDash />},
      { path: "/sales/dashboard", element:  <SalesDash />},
      { path: "/sales/onBoard", element:  <OnBoarding />},
      { path: "/sales/history", element:  <History />}
    ],
  },
]);

export default router;
