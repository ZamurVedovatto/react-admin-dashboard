import Home from "./pages/home/Home.tsx";
import Users from "./pages/users/Users.tsx";
import Products from "./pages/products/Products.tsx";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const Layout = () => {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "products",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
