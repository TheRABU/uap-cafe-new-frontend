import { createBrowserRouter } from "react-router-dom";
import Root from "../outlets/Root";
import Home from "../pages/homepage/Home";
import LoginPage from "../pages/loginpage/LoginPage";
import SignupPage from "../pages/signuppage/SignupPage";
import SingleFoodDetails from "../pages/singlefoodpage/SingleFoodDetails";
import PrivateRoutes from "./PrivateRoute";
import PurchaseNowPage from "../pages/foodpurchasepage/PurchaseNowPage";
import axios from "axios";
import AllSnack from "../pages/AllSnack";
import AllJuice from "../pages/AllJuice";
import AllMainDish from "../pages/AllMainDish";
import AllBreakfast from "../pages/AllBreakfast";
import SearchResults from "../pages/SearchResult";
import DashboardLayout from "../outlets/DashboardLayout";
import MyDashBoard from "../pages/dashboardpage/MyDashBoard";
import AddFoodRequest from "../pages/addfoodrequestpage/AddFoodRequest";
import MyAddedItems from "../pages/myaddedfooditemspage/MyAddedItems";
import MyOrders from "../pages/mypurchasepage/MyOrders";
import AddReviewGallery from "../pages/addreviewtogallery/AddReviewGallery";
import MyFoodItemReviews from "../pages/myfoodreviewspage/MyFoodItemReviews";

import Success from "../pages/PaymentStatus/Success";
import Fail from "../pages/PaymentStatus/Fail";
import Cancel from "../pages/PaymentStatus/Cancel";
import ManageUsers from "../pages/manageUsers/ManageUsers";
import AdminDashboardLayout from "../outlets/AdminDashboardLayout";
import AdminDashboardPage from "../pages/admin/AdminDashboard/AdminDashboardPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-snacks",
        element: <AllSnack />,
      },
      {
        path: "/all-juice",
        element: <AllJuice />,
      },
      {
        path: "/all-MainDish",
        element: <AllMainDish />,
      },
      {
        path: "/all-breakfast",
        element: <AllBreakfast />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/fail",
        element: <Fail />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignupPage />,
      },
      {
        path: "/details/:id",
        element: <SingleFoodDetails />,
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoutes>
            <PurchaseNowPage />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          // await fetch(`http://localhost:5000/api/foods/${params.id}`),
          const res = await axios.get(
            `http://localhost:5000/api/foods/${params.id}`
          );
          return res.data;
        },
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <MyDashBoard />,
      },
      {
        path: "/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/request",
        element: <AddFoodRequest />,
      },
      {
        path: "/my-requests",
        element: <MyAddedItems />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/review",
        element: <AddReviewGallery />,
      },
      {
        path: "/myFoodReviews",
        element: <MyFoodItemReviews />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "/admin-dash",
        element: <AdminDashboardPage />,
      },
    ],
  },
]);

export default router;
