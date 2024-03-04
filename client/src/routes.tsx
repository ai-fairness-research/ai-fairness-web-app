/* eslint-disable react-refresh/only-export-components */
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

const LandingPage = Loadable(lazy(() => import("./pages/home")));
const QuestionsPage = Loadable(lazy(() => import("./pages/survey")));
const AboutPage = Loadable(lazy(() => import("./pages/about")));
const SuccessPage = Loadable(lazy(() => import("./pages/success")));
const ErrorPage = Loadable(lazy(() => import("./pages/error")));

const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "questions",
        element: <QuestionsPage />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
