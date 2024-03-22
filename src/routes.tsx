import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FloorsLayout from "./components/floors/FloorsLayout";
import Login from "./components/screens/Auth/Login";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
