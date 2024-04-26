import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FloorsLayout from "./components/floors/FloorsLayout";
import Login from "./components/screens/Auth/Login";
import ProfileScreen from "./components/screens/profile/ProfileScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/floor",
        element: <FloorsLayout />,
        // errorElement: <ErrorPage />,
      },
      {
        path: "/floor/:floorNo",
        element: <FloorsLayout />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
