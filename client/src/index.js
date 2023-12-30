import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./hoc/Layout/Layout";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import People, { loader as peopleLoader } from "./containers/People";
import About from "./components/Pages/About/About";
import PersonForm, {
  loader as personFormLoader,
} from "./components/PersonForm/PersonForm";

// TODO: Create Error Page and add it to the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "about", element: <About /> },
      { path: "people", element: <People />, loader: peopleLoader },
      { path: "people/new", element: <PersonForm />, loader: personFormLoader },
      { path: "people/:id", element: <div>Person </div> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
