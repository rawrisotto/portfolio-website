import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import BaseLayout from "./components/BaseLayout"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
