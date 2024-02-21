import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomeLogin from "../pages/HomeLogin";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeLogin /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default router;
