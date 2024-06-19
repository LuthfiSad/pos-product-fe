import LoginView from "@pages/Login";
import RegisterView from "@pages/Register";
import CategoryView from "@pages/category/Category";
import AdminView from "@pages/global/Admin";
import AuthView from "@pages/global/Auth";
import Home from "@pages/home";
import AddProductPage from "@pages/products/AddProducts";
import ProductsPage from "@pages/products/DataProducts";
import { createBrowserRouter } from "react-router-dom";
import Users from "../../container/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthView />,
    children: [
      {
        path: "/admin/login",
        element: <LoginView />,
      },
      {
        path: "/admin/register",
        element: <RegisterView />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminView />,
    children: [
      {
        path: "/admin/products",
        element: <ProductsPage />,
      },
      {
        path: "/admin/products/add-product",
        element: <AddProductPage />,
      },
      {
        path: "/admin/categories",
        element: <CategoryView />,
      },
    ],
  },
]);
