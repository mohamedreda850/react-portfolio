import "./App.css";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import NotFound from "./Components/NotFound/NotFound";
import 'flowbite';
import Apps from "./Components/Apps/Apps";
import GraphicDesign from "./Components/GraphicDesign/GraphicDesign";
import Software from "./Components/Software/Software";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "work",
          element: <Work />,children:[
            {
              index: true,
              element: <GraphicDesign />,
            },
            {path: "graphic-design",
            element: <GraphicDesign />},
            {path: "apps",
            element: <Apps />},
            {
              path:'software',
              element:<Software />
            }
            
          ]
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
