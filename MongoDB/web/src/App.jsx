
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import LoginForm from "./LoginForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: "/login",
      element: <div><LoginForm/></div>,
    },
    {
      path: "/register",
      element: <div><RegisterForm/></div>,
    },
  ]);

  return (
    <>
      <nav>
        <a href="">Home</a>
        <a href=""><LoginForm /></a>
        <a href=""><RegisterForm/></a>
      </nav>
      <RouterProvider router={router} />
    </>
  )
}

export default App
