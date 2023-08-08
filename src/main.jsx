import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, {action as nuevoClienteAction} from "./pages/NuevoCliente";
import Index, {loader as clientesLoader} from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarCLiente, {loader as editarClienteLoader, action as editarClienteAction} from "./pages/EditarCLiente";
import {action as eliminarClienteAction} from './components/Cliente'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteID/editar',
        element: <EditarCLiente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteID/eliminar',
        action: eliminarClienteAction,
        errorElement: <ErrorPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
