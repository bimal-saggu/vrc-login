import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomeLogin from "../pages/HomeLogin";
import SignUp from "../components/SignUp";
import AdminDash from "../pages/AdminDash";
import SalesDash from "../pages/SalesDash";
import OnBoarding from "../components/sales-channel/OnBoarding";
import History from "../components/sales-channel/History";
import ChannelDash from "../pages/ChannelDash";
import Pending from "../components/admin/approval/Pending";
import PendingReceipts from "../components/admin/Receipts/PendingReceipts";
import PayrollCard from '../components/admin/Receipts/PayRollCard'
import Customer from "../components/admin/Receipts/Customer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeLogin /> },
      { path: "signup", element: <SignUp /> },
      { path: "/admin/dashboard", element:  <AdminDash />},
      { path: "/admin/approvals", element:  <Pending />},
      { path: "/admin/receipts", element:  <PendingReceipts />},
      { path: "/admin/payroll", element:  <PayrollCard />},
      { path: "/admin/customer", element:  <Customer />},
      { path: "/sales/dashboard", element:  <SalesDash />},
      { path: "/sales/onBoard", element:  <OnBoarding />},
      { path: "/sales/history", element:  <History />},
      { path: "/channel/dashboard", element:  <ChannelDash />},
      { path: "/channel/onBoard", element:  <OnBoarding />},
      { path: "/channel/history", element:  <History />},
    ],
  },
]);

export default router;
