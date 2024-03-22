import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FloorsLayout from "./components/floors/FloorsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      // {
      //   index: true, // Indicates this is the default child route
      //   element: <Navigate to="/feed" replace />, // Redirects from `/` to `/feed`
      // },
      {
        path: "/floor",
        element: <FloorsLayout />,
        // errorElement: <ErrorPage />,
      }
    ],
  },
]);

export default router;
