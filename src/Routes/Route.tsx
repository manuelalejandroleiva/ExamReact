import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import Index from "../Pages";
import Sign from "src/Pages/Sign";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<RootLayout />,
            children: [
                {
                  index: true,
                  element: <Index />,
                },
            ]

        },
        {
            path:'/sign',
            element:<RootLayout />,
            children: [
                {
                  index: true,
                  element: <Sign />,
                },
            ]

        },
        {
            path: '*',
            element: <div>Not Found Page</div>,
          },
    ]
)

export default  router