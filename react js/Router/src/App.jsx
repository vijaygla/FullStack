import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { AppLayout } from "./component/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { GetMoviesData } from "./api/GetMoviesData";
import { MoviesDetails } from "./component/ui/MoviesDetails";
import { GetMoviesDetails } from "./api/GetMoviesDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MoviesDetails />,
          loader: GetMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
