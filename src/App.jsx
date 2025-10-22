import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorMessage from "./ui/ErrorMessage";
import Spinner from "./ui/Spinner";
// route loaders (must be imported synchronously for react-router)
import { loader as menLoader } from "./pages/Men";
import { loader as wishlistloader } from "./pages/Wishlist";
import { loader as cartLoader } from "./pages/Cart";
import { loader as myordersLoader } from "./pages/GetMyOrders";
import { loader as profileLoader } from "./pages/Profile";

// Lazy-loaded route components (best-case: large pages & admin/dashboard)
const Home = lazy(() => import("./pages/Home"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Men = lazy(() => import("./pages/Men"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Signup = lazy(() => import("./features/user/Signup"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./features/user/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const DashboardHome = lazy(() => import("./pages/DashboardHome"));
const GetMyOrders = lazy(() => import("./pages/GetMyOrders"));
// (loaders are imported above)
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            path: ":men",
            element: <Men />,
            loader: menLoader,
            errorElement: <ErrorMessage />,
          },
          {
            path: "women",
            element: <ComingSoon />,
            errorElement: <ErrorMessage />,
          },
          {
            path: "kids",
            element: <ComingSoon />,
            errorElement: <ErrorMessage />,
          },
          {
            path: "wishlist",
            element: (
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            ),
            loader: wishlistloader,
            errorElement: <ErrorMessage />,
          },
        ],
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
        loader: cartLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/my-orders",
        element: (
          <ProtectedRoute>
            <GetMyOrders />
          </ProtectedRoute>
        ),
        errorElement: <ErrorMessage />,
        loader: myordersLoader,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorMessage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorMessage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
    errorElement: <ErrorMessage />,
    loader: profileLoader,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute requiredRole={"admin"}>
        <DashboardHome />
      </ProtectedRoute>
    ),
    errorElement: <ErrorMessage />,
  },
]);
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
// requiredRole = "admin";
