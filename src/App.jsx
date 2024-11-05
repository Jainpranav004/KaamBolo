import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import PostJob from "./pages/PostJob";
import Messages from "./pages/Messages";
import MyBookings from "./pages/MyBookings";
import FindService from "./pages/FindService";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="layout">
      <Header /> {/* Add Header here */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-a-service",
        element: <FindService />,
      },
      {
        path: "/post-a-job",
        element: <PostJob />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/signup",
    element: <PostJob />, // You can replace with Signup component
  },
  {
    path: "/login",
    element: <PostJob />, // You can replace with Login component
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ButtonGradient />
    </>
  );
};

export default App;
