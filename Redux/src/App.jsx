import { useState } from "react";

import "./App.css";
import Tod from "./Components/Tod";
import CurrencyConverter from "./RTK/CURRENCYCONVERTER/CurrencyConverter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/todo",
      element: <Tod />,
    },
    {
      path: "/currency",
      element: <CurrencyConverter />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
