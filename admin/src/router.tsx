import React, { lazy, Suspense as ReactSuspense, ReactElement } from "react";
import Layout from "./layout";

interface LoadableProps {
  [key: string]: unknown;
}

const Loadable =
  (Component: React.ComponentType<LoadableProps>): React.FC<LoadableProps> =>
  (props: LoadableProps): ReactElement =>
    (
      <ReactSuspense fallback={<p>Loading</p>}>
        <Component {...props} />
      </ReactSuspense>
    );

const LoginPage = Loadable(lazy(() => import("./pages/auth")));
const DashboardPage = Loadable(lazy(() => import("./pages/dashboard")));
const ErrorPage = Loadable(lazy(() => import("./pages/error")));

const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
